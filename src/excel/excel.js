import FileSaver from 'file-saver';
import XLSX from 'xlsx';
 
export const excel = (id, title) => {
  let fix = document.querySelector('.el-table__fixed');
  let wb;
  if (fix) {
    wb = XLSX.utils.table_to_book(document.querySelector('#'+id).removeChild(fix));
    document.querySelector('#'+id).appendChild(fix);
  } else {
    wb = XLSX.utils.table_to_book(document.querySelector('#'+id));
  }
 
  let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
  try {
    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), title+'.xlsx')
  } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
  return wbout
};
