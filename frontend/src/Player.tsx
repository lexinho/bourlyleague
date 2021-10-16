import Increment from "./Increment";

function Player({ player }: { player: string }) {
  return (
    <div>
      <p>{player}</p>
      <Increment type="Kill" />;
      <Increment type="Kaaris" />;
      <Increment type="Chatte" />;
      <Increment type="Dabadie" />;
      <Increment type="Recaves" />;
    </div>
  );
}

export default Player;
