import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { setSelectedIssue } from '../../stores/issueSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores/store';

const issues = [
  {
    category: 'Noise Complaint',
    options: [
      { value: 'Option 1', label: 'Loud Music from a neighboring unit' },
      { value: 'Option 2', label: 'Late-night parties' },
    ],
  },
  {
    category: 'Maintenance Issue',
    options: [
      { value: 'Option 3', label: 'Leaking Faucet' },
      { value: 'Option 4', label: 'Broken Heater/AC' },
    ],
  },
  {
    category: 'Building/Common Area Issue',
    options: [
      { value: 'Option 5', label: 'Trash not being collected' },
      { value: 'Option 6', label: 'Elevator not working' },
    ],
  },
  {
    category: 'Neighbor Disputes',
    options: [
      { value: 'Option 7', label: 'Unauthorized parking in my spot' },
      { value: 'Option 8', label: 'Pets not on a leash' },
    ],
  },
  {
    category: 'Package/Delivery Issue',
    options: [
      { value: 'Option 9', label: 'Package Stolen' },
      { value: 'Option 10', label: 'Smart Locker Not Opening' },
    ],
  },
];

export const TenantSupport = () => {
  const dispatch = useDispatch();
  const selectedIssue = useSelector((state: RootState) => state.issue.selectedIssue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSelectedIssue(event.target.value));
  };

  return (
    <>
      <Stack maxWidth='md'>
        <Typography variant='h3'> Tenant Support</Typography>
        <Stack sx={{ mt: 4 }} className='tenant-question-one'>
          <Typography sx={{ m: 1 }} variant='h6'>
            Which one of the following best describes the issue?
          </Typography>
        </Stack>
        <Stack>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id='issue-label'>Issue</InputLabel>
            <Select
              labelId='issue-label'
              value={selectedIssue}
              onChange={handleChange}
              input={<OutlinedInput label='Issue' />}
            >
              {issues.flatMap((issue, index) => [
                <ListSubheader key={`header-${index}`}>{issue.category}</ListSubheader>,
                ...issue.options.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                )),
              ])}
            </Select>
          </FormControl>
        </Stack>
        <Stack sx={{ mt: 4 }} className='tenant-question-two'>
          <Typography sx={{ m: 1 }} variant='h6'>
            Kindly describe the issue below as descriptively as possible <br /> so we can route you
            to the proper channel in our team.
          </Typography>
        </Stack>

        <Stack sx={{ m: 1, width: 500 }}>
          <TextField id='issue-description' multiline rows={4} variant='outlined' />
        </Stack>
        <Stack direction='row' spacing={2} justifyContent='center'>
          <Button variant='contained'>Submit</Button>
          <Button variant='outlined' color='error'>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
