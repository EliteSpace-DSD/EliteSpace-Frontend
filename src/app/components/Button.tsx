type Props = {
  buttonLabel: string;
};

export default function Button({ buttonLabel }: Props) {
  return <button>{buttonLabel}</button>;
}
