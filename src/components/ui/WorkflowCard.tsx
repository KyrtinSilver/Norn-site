import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WorkflowCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageClassName?: string;
  onClick?: () => void;
}

export const WorkflowCard: FC<WorkflowCardProps> = ({
  title,
  description,
  href,
  imageSrc,
  imageClassName,
  onClick,
}) => {
  const commonProps = {
    className: cn(
      'group flex flex-col rounded-xl bg-white dark:bg-gray-900',
      'border border-border',
      'transition-all duration-200 hover:border-border/80',
      'overflow-hidden max-w-sm w-full'
    )
  };

  const content = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-105',
            imageClassName
          )}
        />
      </div>
      <div className="flex justify-between items-end p-4 gap-6">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {onClick ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        {...commonProps}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      {...commonProps}
    >
      {content}
    </Link>
  );
};
