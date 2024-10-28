'use client';
import { Content, Theme } from '@carbon/react';
<div>
  <Theme theme="g100">
    <TutorialHeader />
  </Theme>
  <Content>{children}</Content>
</div>;

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <TutorialHeader />
      <Content>{children}</Content>
    </div>
  );
}
