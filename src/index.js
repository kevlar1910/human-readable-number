module.exports = function toReadable (num) {
    
    let result = ''
    let stringNum = String(num)
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let doubleUnits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        if(stringNum.length == 1) result = units[num]; 
        else if(stringNum.length == 2 && stringNum[0] == 1) result = doubleUnits[stringNum[1]]
        else if(stringNum.length == 2 && stringNum[1] == 0) result = dozens[stringNum[0] - 1]
        else if(stringNum.length == 2 && stringNum[0] !== 1) result = dozens[stringNum[0] - 1] + ' ' + units[stringNum[1]]
        else if(stringNum.length == 3 && stringNum.endsWith('00')) result = units[stringNum[0]] + ' ' + 'hundred'
        else if(stringNum.length == 3 && stringNum[stringNum.length-2] == 0) result = units[stringNum[0]] + ' ' + 'hundred' + ' ' + units[stringNum.slice(-1)]
        else if(stringNum.length == 3 && stringNum[stringNum.length-1] == 0) result = units[stringNum[0]] + ' ' + 'hundred' + ' ' + dozens[stringNum[1] - 1]
        else if(stringNum.length == 3 && stringNum[1] == 1) result = units[stringNum[0]] + ' ' + 'hundred' + ' ' + doubleUnits[stringNum[2]]
        else return units[stringNum[0]] + ' ' + 'hundred' + ' ' + dozens[stringNum[1] - 1] + ' ' + units[stringNum[2]]
        return result
        }

