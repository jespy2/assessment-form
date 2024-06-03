import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FailureMessage({ handleReset }: { handleReset?: () => void}) {
	return (
		<Box sx={{ mt: 2 }}>
			<Typography variant='h6' color='red'>
				<p>Oops--there was a problem!</p>
			</Typography>
			<Typography variant='h6' color='#8080C1'>
				<p>Let's try that again. Please review your info and resubmit</p>
			</Typography>
			<Button className='reviewButton' onClick={handleReset}>
				Review & Edit
			</Button>
		</Box>
	);
}
