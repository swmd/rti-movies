jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: () => ({
      params: {
        movieId: '466420',
      },
    }),
    navigate: () => jest.fn(),
  };
});
