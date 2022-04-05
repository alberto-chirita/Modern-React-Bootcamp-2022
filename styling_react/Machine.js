class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const styles = { fontSize: "50px", backgroundColor: "purple" };
    const isWinner = s1 === s2 && s2 === s3;

    return (
      <div className="Machine">
        <p style={styles}>
          {s1} {s2} {s3}
        </p>
        <p className={isWinner ? "Machine-winner" : "Machine-loser"}>
          {isWinner ? "You win!" : "You lose!"}
        </p>
      </div>
    );
  }
}
