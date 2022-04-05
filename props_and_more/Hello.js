class Hello extends React.Component {
  render() {
    const to = this.props.to;
    const from = this.props.from;
    const bangs = "!".repeat(this.props.bangs);
    const img = this.props.img;

    return (
      <div>
        <p>
          Hi {to} from {from}
          {bangs}
        </p>
        <img src={img} />
      </div>
    );
  }
}
