import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface TableColumn<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
  className,
}: TableProps<T>) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-surface/60 bg-background-secondary/40">
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left px-6 py-4 text-text-secondary/90 text-xs font-bold uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-12 text-center text-text-muted"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-surface/20 last:border-0 hover:bg-surface/60 transition-colors duration-200"
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-6 text-text-primary">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
