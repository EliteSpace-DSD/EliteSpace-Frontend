import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import { setSelectedIssue } from "../../stores/issueSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/store";
import { FormEvent } from "react";
import { useSendComplaintMutation } from "../Services/userSlice";
import { useRef } from "react";

const issues = [
  {
    category: "Noise Complaint",
    options: [
      {
        value: "Option 1",
        label: "Loud Music from a neighboring unit",
        priority: "low",
      },
      {
        value: "Option 2",
        label: "Late-night parties on Weekdays",
        priority: "med",
      },
    ],
  },
  {
    category: "Maintenance Issue",
    options: [
      { value: "Option 3", label: "Leaking Faucet", priority: "med" },
      { value: "Option 4", label: "Broken Heater/AC", priority: "high" },
    ],
  },
  {
    category: "Building/Common Area Issue",
    options: [
      {
        value: "Option 5",
        label: "Trash not being collected",
        priority: "low",
      },
      { value: "Option 6", label: "Elevator not working", priority: "high" },
    ],
  },
  {
    category: "Neighbor Disputes",
    options: [
      {
        value: "Option 7",
        label: "Unauthorized parking in my spot",
        priority: "medium",
      },
      { value: "Option 8", label: "Pets not on a leash", priority: "low" },
    ],
  },
  {
    category: "Package/Delivery Issue",
    options: [
      { value: "Option 9", label: "Package Stolen", priority: "medium" },
      {
        value: "Option 10",
        label: "Smart Locker Not Opening",
        priority: "low",
      },
    ],
  },
];

export const TenantSupport = () => {
  const dispatch = useDispatch();
  const selectedIssue = useSelector(
    (state: RootState) => state.issue.complaint.selectedIssue
  );
  const extraDetailsRef = useRef<HTMLInputElement>(null);

  const [sendComplaint] = useSendComplaintMutation();

  //Handlers
  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSelectedIssue(event.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const extraDetails = extraDetailsRef.current?.value || "";
    const fullIssue = {
      selectedIssue,
      extraDetails,
      img: "",
      priority: "",
    };
    sendComplaint(fullIssue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack maxWidth="md">
        <Typography variant="h3"> Tenant Support</Typography>
        <Stack sx={{ mt: 4 }} className="tenant-question-one">
          <Typography sx={{ m: 1 }} variant="h6">
            Which one of the following best describes the issue?
          </Typography>
        </Stack>
        <Stack>
          <FormControl sx={{ m: 1, width: 500 }} required>
            <InputLabel id="issue-label">Issue</InputLabel>
            <Select
              labelId="issue-label"
              value={selectedIssue}
              onChange={handleChange}
              input={<OutlinedInput label="Issue" />}
            >
              {issues.flatMap((issue, index) => [
                <ListSubheader key={`header-${index}`}>
                  {issue.category}
                </ListSubheader>,
                ...issue.options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                )),
              ])}
            </Select>
          </FormControl>
        </Stack>
        <Stack sx={{ mt: 4 }} className="tenant-question-two">
          <Typography sx={{ m: 1 }} variant="h6">
            Kindly describe the issue below as descriptively as possible <br />{" "}
            so we can route you to the proper channel in our team.
          </Typography>
        </Stack>
        <Stack sx={{ m: 1, width: 500 }}>
          <TextField
            id="issue-description"
            multiline
            rows={4}
            variant="outlined"
            inputRef={extraDetailsRef}
          />
        </Stack>
        <Stack>
          <Input type="file" inputProps={{ accept: "image/*" }} />
        </Stack>
        {/*Form Submit Button */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
