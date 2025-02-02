import os
import re
import argparse
from pathlib import Path

# Only these characters need to be escaped in JSX
PRESERVE_ESCAPES = {
    '&gt;': '>',  # Only preserve when not in JSX tags
    '&lt;': '<',  # Only preserve when not in JSX tags
    '&#123;': '{',  # Only preserve in specific JSX contexts
    '&#125;': '}'   # Only preserve in specific JSX contexts
}

# All other common escapes we want to restore to actual characters
RESTORE_ESCAPES = {
    '&apos;': "'",
    '&quot;': '"',
    '&amp;': '&',
    '&mdash;': '—',
    '&ndash;': '–',
    '&bull;': '•',
    '&hellip;': '…',
    '&nbsp;': ' ',
    '&trade;': '™',
    '&reg;': '®',
    '&copy;': '©'
}

def should_preserve_escape(line: str, entity: str, position: int) -> bool:
    """Determine if an escape sequence should be preserved based on context."""
    
    # Don't unescape < > within JSX tags
    if entity in ['&lt;', '&gt;']:
        # Check if we're inside a JSX tag
        before_text = line[:position]
        is_in_jsx_tag = bool(re.search(r'<[^>]*$', before_text))
        return is_in_jsx_tag
    
    # Don't unescape { } in JSX expressions
    if entity in ['&#123;', '&#125;']:
        # Check if we're in a JSX expression context
        before_text = line[:position]
        is_in_jsx_expression = bool(re.search(r'={[^}]*$', before_text))
        return is_in_jsx_expression
    
    return False

def process_file(file_path: Path) -> None:
    """Process a single file and restore excessive escapes."""
    
    # Only process TypeScript/JavaScript/TSX/JSX files
    if not file_path.suffix in ['.ts', '.tsx', '.js', '.jsx']:
        return
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            new_line = line
            
            # First handle preservation escapes
            for escape, char in PRESERVE_ESCAPES.items():
                positions = [m.start() for m in re.finditer(re.escape(escape), new_line)]
                for pos in reversed(positions):
                    if not should_preserve_escape(new_line, escape, pos):
                        new_line = new_line[:pos] + char + new_line[pos + len(escape):]
            
            # Then handle restoration escapes
            for escape, char in RESTORE_ESCAPES.items():
                if escape in new_line:
                    new_line = new_line.replace(escape, char)
                    modified = True
            
            new_lines.append(new_line)
        
        if modified:
            print(f"Modifying: {file_path}")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
    
    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")

def get_path_interactively() -> Path:
    """Get path through interactive CLI."""
    while True:
        path = input("\nEnter the path to process (or press Enter for default src/): ").strip()
        
        # Use default if empty
        if not path:
            default_path = Path('/Users/cosmoinclan/Documents/GitHub/Norn-site/src')
            print(f"Using default path: {default_path}")
            return default_path
        
        # Convert to Path object
        path = Path(path)
        
        # Validate path
        if not path.exists():
            print(f"Error: Path {path} does not exist. Please try again.")
            continue
            
        # Confirm with user
        confirm = input(f"\nConfirm processing files in: {path} [y/N]: ").lower()
        if confirm in ['y', 'yes']:
            return path
        else:
            print("Operation cancelled. Please enter a new path.")

def main():
    parser = argparse.ArgumentParser(description='Restore excessive HTML entity escapes in source files.')
    parser.add_argument('-i', '--interactive', action='store_true', 
                       help='Run in interactive mode to specify path')
    parser.add_argument('path', nargs='?', type=str, 
                       help='Path to process (optional if using -i)')
    
    args = parser.parse_args()
    
    if args.interactive:
        src_path = get_path_interactively()
    elif args.path:
        src_path = Path(args.path)
    else:
        src_path = Path('/Users/cosmoinclan/Documents/GitHub/Norn-site/src')
    
    if not src_path.exists():
        print(f"Error: Path {src_path} does not exist")
        return
    
    print(f"\nProcessing files in {src_path}")
    print("Looking for files with extensions: .ts, .tsx, .js, .jsx")
    print("This will modify files in place. Make sure you have a backup or version control.\n")
    
    # Walk through all files in the directory
    file_count = 0
    modified_count = 0
    
    for root, _, files in os.walk(src_path):
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix in ['.ts', '.tsx', '.js', '.jsx']:
                file_count += 1
                try:
                    before_content = file_path.read_text(encoding='utf-8')
                    process_file(file_path)
                    after_content = file_path.read_text(encoding='utf-8')
                    if before_content != after_content:
                        modified_count += 1
                except Exception as e:
                    print(f"Error processing {file_path}: {str(e)}")
    
    print(f"\nProcessing complete!")
    print(f"Files scanned: {file_count}")
    print(f"Files modified: {modified_count}")

if __name__ == "__main__":
    main()
