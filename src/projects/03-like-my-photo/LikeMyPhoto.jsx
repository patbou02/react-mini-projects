import Title from '../../components/Title';

export default function LikeMyPhoto() {
  return (
    <div className="container">
      <Title text="Like My Photo" />
      <Title classes="subtitle text-center" text="Likes" />
      <div className="card card-dark m-auto" style={{ width: 300, cursor: 'pointer'}}>
        <div className="card-header fs-xl">
          <small>Doggy</small>
        </div>
        <img src="#" style={{ height: "fit"}} />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between'}}></div>
      </div>
    </div>
  );
}