export default function ShowSelect({
  selectChange,
  showLimit,
}: {
  showLimit: number;
  selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <select className="form-select" onChange={selectChange}>
        <option value={showLimit}>{showLimit}</option>
        <option value={12}>12</option>
        <option value={16}>16</option>
      </select>
    </>
  );
}
