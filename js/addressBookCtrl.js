function addressBookCtrl($scope,$localStorage,$filter) {

    $scope.criteria = "";

    $scope.matchesCriteria = function () {
        // don't show book alphabet headings if text searching
        if(!$scope.criteria.length) {
            return true;
        }
    }

    $scope.$storage = $localStorage.$default({
        addresses: {}
    });

    $scope.phoneTypes = [
        {"id": 0, "name":'Mobile'},
        {"id": 1, "name":'Home'},
        {"id": 2, "name":'Work'}
    ];

    $scope.emailTypes = [
        {"id": 0, "name":'Work'},
        {"id": 1, "name":'Other'}
    ];

    $scope.addressEntry = {};

    $scope.displayEntry = function (address) {
        $scope.addressEntry = address;
    }

    $scope.addItem = function (type) {
        $scope.addressEntry[type].push({});
    };

    $scope.addNewPhone = function () {
        $scope.addItem("phones");
    };

    $scope.addNewEmail = function () {
        $scope.addItem("emails");
    };

    $scope.resetAddressEntry = function () {
        $scope.addressEntry = {
            name:null,
            phones:[],
            emails:[],
            // default to mobile and work types when resetting the address view
            selectedPhones:[0],
            selectedEmails:[0]
        }
    };

    $scope.clearEmptyFields = function () {
        $scope.clearEmpty("phones");
        $scope.clearEmpty("emails");
    }

    $scope.clearEmpty = function (fieldType) {
        var inputs = $scope.addressEntry[fieldType];
        for(var i=0; i < inputs.length; i++ ) {
            // Hack! angular adds a $$haskey to empty fields, remove if only one property
            if(Object.keys(inputs[i]).length < 2) {
                inputs.splice(i,1);
                i--;
            }
        }
    }

    $scope.extractSurname = function () {
        var fullName = $scope.addressEntry.name;
        $scope.addressEntry.surname = fullName.substring(fullName.indexOf(' ')).trim();
    }

    $scope.saveOrUpdate = function () {
        var storedAddresses = $scope.$storage.addresses;
        var address = $scope.addressEntry;
        // get the book letter to store the address
        var bookLetter = address.surname.charAt(0);

        if(!storedAddresses[bookLetter]) {
            // create new book letter and save the address
            storedAddresses[bookLetter] = [$scope.clone(address)];
        } else {
            // lookup the address in its corresponding bookLetter
            var index = $scope.findAddress(bookLetter, address.name);

            if(index > -1){
                // update
                storedAddresses[bookLetter][index] = $scope.clone(address);
            } else {
                // save new
                storedAddresses[bookLetter].push($scope.clone(address));
            }
        }
    }

    $scope.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    }

    $scope.findAddress = function (bookLetter,name) {
        return $scope.$storage.addresses[bookLetter].map(function(e) { return e.name; }).indexOf(name);
    }

    $scope.onlyWords = /^[a-zA-Z ]*$/;
    $scope.onlyDigits = /^([0-9]*)$/;

    $scope.submitForm = function() {
        if ($scope.addressBook.$valid) {
            $scope.clearEmptyFields();
            $scope.extractSurname();
            $scope.saveOrUpdate();
        }
    };

    // show a empty address on startup
    $scope.resetAddressEntry();
}