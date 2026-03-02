const submitData = async () => {
    let firstNameDom = document.querySelector('input[name=firstname]')
    let lastNameDom = document.querySelector('input[name=lastname]');
    let ageDom = document.querySelector('input[name=age]');
    let genderDom = document.querySelector('input[name=gender]:checked');
    let interestDoms = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDom = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');
    try {
    let interest = ' '
    for (let i = 0; i < interestDoms.length; i++) {
        interest += interestDoms[i].value
        if (i != interestDoms.length -1) {
            interest += ', '
        }
    }

    let userData = {
        firstName: firstNameDom.value,
        lastName: lastNameDom.value,
        age: ageDom.value,
        gender: genderDom.value,
        description: descriptionDom.value,
        interests: interest
    }
   
        const response = await axios.post('http://localhost:8000/users', userData)
        console.log('response', response.data);

        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDOM.className = "message success";
    } catch (error) {
        if (error.response) {
            console.error('Error response from server:', error.response.message);
        }
        messageDOM.innerText = "บันทึกข้อมูลไม่สำเร็จ";
        messageDOM.className = "message danger";
    }
    
}