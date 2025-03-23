import { FormEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSelectedIssue } from '../../stores/issueSlice';
import { useSendComplaintMutation } from '../Services/userSlice';
import { RootState } from '../../stores/store';
import {
  Input,
  Typography,
  TextField,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ListSubheader,
  Container,
  Paper,
  Button,
  Stack,
  SelectChangeEvent,
} from '@mui/material';

const issues = [
  {
    category: 'Noise Complaint',
    options: [
      {
        value: 'Option 1',
        label: 'Loud Music from a neighboring unit',
        priority: 'low',
      },
      {
        value: 'Option 2',
        label: 'Late-night parties on Weekdays',
        priority: 'med',
      },
    ],
  },
  {
    category: 'Maintenance Issue',
    options: [
      { value: 'Option 3', label: 'Leaking Faucet', priority: 'med' },
      { value: 'Option 4', label: 'Broken Heater/AC', priority: 'high' },
    ],
  },
  {
    category: 'Building/Common Area Issue',
    options: [
      {
        value: 'Option 5',
        label: 'Trash not being collected',
        priority: 'low',
      },
      { value: 'Option 6', label: 'Elevator not working', priority: 'high' },
    ],
  },
  {
    category: 'Neighbor Disputes',
    options: [
      {
        value: 'Option 7',
        label: 'Unauthorized parking in my spot',
        priority: 'medium',
      },
      { value: 'Option 8', label: 'Pets not on a leash', priority: 'low' },
    ],
  },
  {
    category: 'Package/Delivery Issue',
    options: [
      { value: 'Option 9', label: 'Package Stolen', priority: 'medium' },
      {
        value: 'Option 10',
        label: 'Smart Locker Not Opening',
        priority: 'low',
      },
    ],
  },
];

export const TenantSupport = () => {
  const dispatch = useDispatch();
  const selectedIssue = useSelector((state: RootState) => state.issue.complaint.selectedIssue);
  const extraDetailsRef = useRef<HTMLInputElement>(null);
  const [sendComplaint] = useSendComplaintMutation();

  //Handlers
  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSelectedIssue(event.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const extraDetails = extraDetailsRef.current?.value || '';
    const fullIssue = {
      selectedIssue,
      extraDetails,
      img: '',
      priority: '',
    };
    sendComplaint(fullIssue);
  };

  const navigate = useNavigate();

  const handleCancelButton = () => {
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          height: '600px',
          marginTop: '60px',
        }}
      >
        <Paper
          sx={{
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Stack
            maxWidth='md'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: 'auto', sm: 500 },
              height: '100%',
              margin: '0 auto',
              gap: '30px',
            }}
          >
            <Typography variant='h3'> Tenant Support</Typography>
            <Stack spacing={3} sx={{ mt: 4, m: 1 }}>
              <Stack>
                <Typography sx={{ mt: 4 }} variant='h6'>
                  Which one of the following best describes the issue?
                </Typography>
                <FormControl sx={{ width: 500 }} required>
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
              <Stack spacing={3}>
                <Typography variant='h6'>
                  Kindly describe the issue below as descriptively as possible so we can route you
                  to the proper channel in our team.
                </Typography>
                <TextField
                  id='issue-description'
                  multiline
                  rows={4}
                  variant='outlined'
                  inputRef={extraDetailsRef}
                  sx={{ width: 500 }}
                />
              </Stack>
              <Input type='file' inputProps={{ accept: 'image/*' }} disableUnderline={true} />
            </Stack>
            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
              <Button onClick={handleCancelButton} variant='outlined' color='error'>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </form>
  );
};
