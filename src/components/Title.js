const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <div>{subTitle}</div>
      </h2>
    </div>
  );
};
export default Title;
