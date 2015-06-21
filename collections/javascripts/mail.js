var file = 'people.txt';
var current = '';
var return = { 'email' : '' };
if( file_exists( file ) ) {
    current = file_get_contents(file);
}

if( ( var _POST['email'] ) ) {
    if( ( _POST['email'] ) ) {
        return['email'] = _POST['email'];
        if( filter_var( _POST['email'], FILTER_VALIDATE_EMAIL ) !== false ) {
         
            current +=  _POST['email']  + "" +  "\n";

            return['bytes_added'] = file_put_contents(file, current, LOCK_EX);
        }
        else {
            return['error'] = 'Invalid Email';
        }
    }
    else {
        return['error'] = 'No Email Sent';
    }
}
else {
    return['error'] = 'No Email Sent';
}

alert( json_encode( return ));	
