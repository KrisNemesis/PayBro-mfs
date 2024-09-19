document.getElementById('show-cash-out').addEventListener('click', function () {
    console.log('CLICKED')
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});
document.getElementById('btn-add-money').addEventListener('click', function () {
    console.log('CLICKED')
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});