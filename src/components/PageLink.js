const PageLink = ({ link, childClass }) => {
  return (
    <li>
      <a href={link.href} className={childClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
