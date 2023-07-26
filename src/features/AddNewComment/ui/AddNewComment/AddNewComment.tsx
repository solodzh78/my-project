import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack } from 'shared/ui/Stack';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/AddNewCommentSlice';
import s from './AddNewComment.module.scss';
import { getAddNewCommentText }
  from '../../model/selectors/AddNewCommentSelectors';

export interface AddNewCommentProps {
  className?: string | undefined;
  onSendComment: (text: string | undefined) => void;
}

export const AddNewComment = memo((props: AddNewCommentProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('articles');
  const text = useSelector(getAddNewCommentText);
  // const error = useSelector(getAddNewCommentError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicConnectAsyncReducers asyncReducers={{ addNewComment: addNewCommentReducer }}>
      <HStack justify="between" max className={classNames([s.AddCommentForm, className])}>
        <Input
          className={s.input}
          placeholder={t('addComment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme="outline"
          onClick={onSendHandler}
        >
          {t('send')}
        </Button>
      </HStack>
    </DynamicConnectAsyncReducers>
  );
});
