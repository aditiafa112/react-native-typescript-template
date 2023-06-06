import React from 'react';
import {useSafeAreaInsets} from '../../../hooks';
import {View as RNView, ViewProps} from 'react-native';
import {styled, StyledProps} from 'nativewind';
import clsxm from '../../../utils/clsxm';

const View = styled(RNView, {});

const SafeAreaView = ({
  children,
  className,
  ...props
}: StyledProps<ViewProps>) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      {...props}
      className={clsxm(
        `flex-1 pt-[${insets.top}] pb-[${insets.bottom}] pl-[${insets.left}] pr-[${insets.right}] bg-blue-50`,
        className,
      )}>
      {children}
    </View>
  );
};

export default SafeAreaView;
