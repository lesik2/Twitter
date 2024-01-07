import { TweetForm } from '@components/TweetForm/index';
import userEvent from '@testing-library/user-event';
import * as Hooks from '@hooks/redux';
import * as actions from '@store/reducers/tweetsSlice';

import { cleanup, render, screen } from '../test.utils';

jest.mock('@db/tweet', () => ({
  addTweet: jest.fn(),
}));
URL.createObjectURL = jest.fn(() => 'image_url');

const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');

describe('TweetForm component', () => {
  beforeEach(() => {
    render(<TweetForm />);
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('Should render TweetForm component', () => {
    expect(screen.getByTestId('tweet-form')).toBeInTheDocument();
  });
  test('should update the text state when the input value changes', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText("What's happening");
    await userEvent.type(input, 'Hello, world!');
    expect(input.value).toBe('Hello, world!');
  });
  test('should disabled button if textarea empty', async () => {
    const tweetButton = screen.getByText('Tweet');
    expect(tweetButton).toBeDisabled();
    const input: HTMLInputElement = screen.getByPlaceholderText("What's happening");
    await userEvent.type(input, 'Hello, world!');
    expect(tweetButton).not.toBeDisabled();
  });
  test('should add an image when a file is selected', async () => {
    const input = screen.getByTestId('image-input');
    const file = new File(['something'], 'image.png', { type: 'image/png' });
    await userEvent.upload(input, file);
    const image: HTMLImageElement | null = screen.queryByTestId('image-tweet');
    expect(image).toBeInTheDocument();
    if (image) {
      expect(image.src).toContain('image_url');
    }
  });

  test('should remove the image when the delete button is clicked', async () => {
    const input = screen.getByTestId('image-input');
    const file = new File(['something'], 'image.png', { type: 'image/png' });
    await userEvent.upload(input, file);
    const deleteButton = screen.getByTestId('delete-image-tweet');
    await userEvent.click(deleteButton);
    expect(screen.queryByTestId('image-tweet')).not.toBeInTheDocument();
  });

  test('should dispatch actions', async () => {
    const dispatch = jest.fn();
    const mockedSetTweets = jest.spyOn(actions, 'setTweets');
    useDispatchMock.mockReturnValue(dispatch);
    const input = screen.getByTestId('image-input');

    const submitButton = screen.getByTestId('tweet-submit');

    await userEvent.type(input, 'This is a test tweet');
    await userEvent.click(submitButton);

    expect(mockedSetTweets).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
