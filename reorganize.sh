#!/bin/bash

# Create new directories
mkdir -p content/{about,insights,solutions,product,resources}

# About section
mv content/about.mdx content/about/index.mdx
mv content/team.mdx content/about/
mv content/values.mdx content/about/
mv content/press.mdx content/about/
mv content/careers.mdx content/about/

# Insights section
mv content/blog.mdx content/insights/
mv content/research.mdx content/insights/index.mdx
mv content/research/* content/insights/

# Solutions section
mv content/corporate/* content/solutions/

# Product section
mv content/docs.mdx content/product/index.mdx
mv content/docs/* content/product/

# Resources section
mv content/documents.mdx content/resources/
mv content/white-paper.mdx content/resources/

# Clean up empty directories
rm -r content/research content/corporate content/docs

echo "Content reorganization complete!"
