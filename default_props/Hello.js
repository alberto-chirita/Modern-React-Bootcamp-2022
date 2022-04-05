class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangsNum: 1,
  };

  render() {
    const { to, from, bangsNum } = this.props;
    const bangs = "!".repeat(bangsNum);

    return (
      <div>
        <p>
          Hi {to} from {from}
          {bangs}
        </p>
      </div>
    );
  }
}
