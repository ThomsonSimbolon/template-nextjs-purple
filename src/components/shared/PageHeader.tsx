import { ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="pt-8 pb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{title}</h1>
          {description && (
            <p className="text-text-secondary text-lg mt-2">{description}</p>
          )}
        </div>
        
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}
