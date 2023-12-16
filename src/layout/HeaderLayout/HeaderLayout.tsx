import {useNavigation} from '@react-navigation/native';
import {ChevronLeftIcon, HStack, IconButton, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {EllipsisVerticalIcon} from 'react-native-heroicons/outline';
import {SafeAreaView} from 'react-native-safe-area-context';

type HeaderLayoutProps = PropsWithChildren<{
  title: string;
}>;

export function HeaderLayout({title, children}: HeaderLayoutProps) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <HStack alignItems={'center'} bgColor={'gray.dark'} height={16} px={4}>
        {navigation.canGoBack() && (
          <IconButton
            icon={<ChevronLeftIcon />}
            onPress={navigation.goBack}
            ml={-4}
          />
        )}
        <Text flex={1} color="white" fontSize={20} bold>
          {title}
        </Text>
        <EllipsisVerticalIcon color="white" />
      </HStack>
      {children}
    </SafeAreaView>
  );
}
