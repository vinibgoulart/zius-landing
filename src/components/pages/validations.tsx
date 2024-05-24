import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { CodeSnippetInline } from "../ui/code-snippet-inline";

const Validations = () => {
  const validations = [
    {
      type: "required",
      description: "The field is required",
      tagValue: "false",
      example: "required:Field is required",
    },
    {
      type: "int",
      description: "The field must be an integer",
      tagValue: "false",
      example: "int:Field must be an integer",
    },
    {
      type: "string",
      description: "The field must be a string",
      tagValue: "false",
      example: "string:Field must be a string",
    },
    {
      type: "number",
      description: "The field must be a number",
      tagValue: "false",
      example: "number:Field must be a number",
    },
    {
      type: "email",
      description: "The field must be an email",
      tagValue: "false",
      example: "email:Field must be an email",
    },
    {
      type: "phone",
      description: "The field must be a phone number",
      tagValue: "false",
      example: "phone:Field must be a phone number",
    },
    {
      type: "regex",
      description: "The field must match the regex pattern",
      tagValue: "true",
      example: "regex={^[a-zA-Z]\\d{1,2}$}:Field must match the pattern",
    },
    {
      type: "equals",
      description: "The field must be equal to another field",
      tagValue: "true",
      example: "equals={BOY|GIRL}:Field must be equal to BOY or GIRL",
    },
    {
      type: "struct",
      description: "The field must be a struct",
      tagValue: "false",
      example: "struct:Field must be a struct",
    },
    {
      type: "array",
      description: "The field must be an array",
      tagValue: "false",
      example: "array:Field must be an array",
    },
  ];

  return (
    <>
      <h2 className="text-5xl font-bold gradient-primary-to-tertiary">
        Validations
      </h2>
      <Card className="xl:col-span-2 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Tag Value</TableHead>
              <TableHead className="text-right">Example</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {validations.map((validation) => (
              <TableRow key={validation.type}>
                <TableCell>
                  <div className="font-medium">{validation.type}</div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {validation.description}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {validation.tagValue}
                </TableCell>
                <TableCell className="text-right">
                  <CodeSnippetInline>{validation.example}</CodeSnippetInline>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export { Validations };
