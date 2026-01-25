function submitData() {
    let firstNameDom = document.querySelector('input[name=firstName]');
    let lastNameDom = document.querySelector('input[name=lastName]');
    let ageDom = document.querySelector('input[name=age]');

    let genderDom = document.querySelector('input[name=gender]:checked');
    let interestDoms = document.querySelectorAll('input[name=interest]:checked');

    let descriptionDom = document.querySelector('textarea[name=description]');

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
        gerder: genderDom.value,
        descriptionDom: descriptionDom.value,
        interest: interest
    }
    console.log('submit Data', userData);
}