import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const HStack = (props: HStackProps) => <Flex direction="row" {...props} />;
