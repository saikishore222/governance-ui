import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';

import cx from '@hub/lib/cx';

interface Props extends React.ComponentProps<typeof NavigationMenu.Item> {
  children: string;
  href: string;
  icon: JSX.Element;
  selected?: boolean;
}

export function Tab(props: Props) {
  const { children, className, href, icon, selected, ...rest } = props;

  return (
    <NavigationMenu.Item
      className={cx(
        'cursor-pointer',
        'flex',
        'font-semibold',
        'h-10',
        'items-center',
        'justify-center',
        'relative',
        'text-neutral-500',
        'uppercase',
        'w-36',
        'hover:text-sky-500',
        selected && 'text-sky-500',
        className,
      )}
      {...rest}
    >
      <Link passHref href={href}>
        <NavigationMenu.Link className="flex items-center justify-center space-x-1.5 h-10 w-36">
          {React.cloneElement(icon, {
            className: cx(
              'h-4',
              'w-4',
              'fill-current',
              'transition-colors',
              icon.props.className,
            ),
          })}
          <div className="text-xs transition-colors">{children}</div>
        </NavigationMenu.Link>
      </Link>
      {selected && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500" />
      )}
    </NavigationMenu.Item>
  );
}