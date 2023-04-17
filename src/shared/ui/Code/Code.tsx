import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre
      data-testid="Code"
      className={classNames([s.Code, className])}
    >
      <Button className={s.copyBtn} theme="clear" onClick={onCopy}>
        <Icon Svg={CopyIcon} className={s.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
