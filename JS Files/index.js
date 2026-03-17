function showProfile(profileType, element){
    // 1. Deactivate all files
    document.querySelectorAll('.profile-Div').forEach(p => p.classList.remove('active'));
    
    // 2. Activate intended file
    element.classList.add('active');

    // 3. Hide all files
    document.querySelectorAll('.contentBox-Div').forEach(b => b.classList.remove('active'));
    
    // 4. Show intended file
    document.getElementById(profileType + 'Content-Div').classList.add('active');
    let displayArea = document.getElementById('displayArea-Div');
    displayArea.className = profileType + '-Div';
}