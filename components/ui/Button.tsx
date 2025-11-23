import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 font-semibold uppercase tracking-wider transition-all duration-300 text-sm'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
    secondary: 'bg-secondary-800 text-white hover:bg-secondary-900 hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

