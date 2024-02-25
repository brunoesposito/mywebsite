import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <Link
      {...rest}
      className="flex items-center hover:text-blue-700"
      target="_blank">
      {children}
      <ExternalLinkIcon size={13} className="ml-1" />
    </Link>
  );
}
