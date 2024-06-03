import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SuccessMessage( {handleReset}: { handleReset?: () => void }){
	return (
		<Box sx={{ mt: 2 }}>
			<Typography variant='h6' color='#8080C1'>
				<p>Thank you for completing our form!</p>
				<p>Your information has been submitted.</p>
      </Typography>
      
			<Typography variant='h6' color='#49C5CB'>
				<p>That was awesome--I want to do it again!</p>
      </Typography>
			<Button className='reviewButton' onClick={handleReset}>
				Restart Form
			</Button>
		</Box>
	);
}
