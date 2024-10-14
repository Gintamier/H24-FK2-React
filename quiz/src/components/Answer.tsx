type Props = {
  onPress: () => void;
  text: string;
  color?: string;
  disabled?: boolean;
};

function Answer(props: Props) {
  const style = props.color ? { color: props.color } : {};

  return (
    <button
      className="border w-44 mx-auto p-2 rounded-md justify-center text-center bg-gray-900 font-bold hover:border-blue-600"
      onClick={props.onPress}
      disabled={props.disabled}
    >
      <span style={style}>{props.text}</span>
    </button>
  );
}

export default Answer;
