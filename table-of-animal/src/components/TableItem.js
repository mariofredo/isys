function TableItem({ data }) {
  return (
    <>
      {data.map((el, i) => {
        return (
          <li key={i}>
            {el.name}
            <ol>
              {el.children.length > 0 && <TableItem data={el.children} />}
            </ol>
          </li>
        );
      })}
    </>
  );
}

export default TableItem;
