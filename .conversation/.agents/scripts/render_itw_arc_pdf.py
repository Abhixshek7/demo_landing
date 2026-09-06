import fitz
from pathlib import Path
pdf = Path('attached_assets/ITW_ARC_Website_Design_Context_1788717073512.pdf')
out = Path('.agents/outputs/itw_arc_pdf_pages')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(pdf)
print('pages', doc.page_count)
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    path = out / f'page-{i+1:02d}.png'
    pix.save(path)
    print(path, pix.width, pix.height)
