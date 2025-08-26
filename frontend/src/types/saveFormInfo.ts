import { Document, Packer, Paragraph, TextRun } from "docx";

export async function saveFormInfo(formData: FormData): Promise<void> {
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  const response = await fetch('http://127.0.0.1:5000/upload', {
    method: 'POST',
    body: formData
  });

  const companyFilledOutResumeText = await response.json();
  const paragraphs = companyFilledOutResumeText.result.split('\n').map((line: string) => new Paragraph(line));

  const filledCompanyResume = new Document({
    sections: [
        {
        properties: {},
        children: paragraphs,
        },
    ],
    });

  const blob = await Packer.toBlob(filledCompanyResume);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "filled_company_resume.docx";
  a.click();
  window.URL.revokeObjectURL(url);
}