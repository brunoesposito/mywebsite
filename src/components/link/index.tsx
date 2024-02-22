import { ExternalLink } from 'lucide-react';

export default function Link() {
  return (
    <a className="flex items-center gap-1 font-semibold hover:text-blue-600">
      Voltz <ExternalLink size={13} />
    </a>
  );
}
