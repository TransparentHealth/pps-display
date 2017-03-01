var mpnData = {
    "hipaa": {
        "protected": "Yes",
        "noticeUrl": "http://www.google.com"
    },
    "use": {
        "companyOps": true,
        "scientificResearch": true,
        "marketing": true,
        "development": true
    },
    "share": {
        "developmentWithId": true,
        "scientificResearchWithId": true,
        "companyOpsNoId": false,
        "scientificResearchNoId": false,
        "otherWithId": true,
        "otherDescriptionWithId": "To TEST INPUT",
        "noneNoId": true
    },
    "sell": {
        "dataWithId": "Yes",
        "dataNoId": "Yes. With your permission,"
    },
    "store": {
        "device": "Yes",
        "external": "Yes"
    },
    "encryption": {
        "device": "Yes, by default",
        "server": "Yes, when you take certain steps",
        "transmit": "No"
    },
    "privacy": {
        "requestPermissions": "Yes",
        "socialMedia": "No",
        "other": false,
        "microphone": true,
        "location": false,
        "photos": false,
        "camera": true,
        "health": true
    },
    "user": {
        "hasOptions": "No",
        "edit": true,
        "share": true,
        "delete": true
    },
    "deactivation": {
        "action": "deleteOnRequest"
    },
    "policy": {
        "notificationMethod": "We will email you ASAP"
    },
    "breach": {
        "procedure": "Lock your account and email you"
    },
    "contact": {
        "name": "TEST company",
        "privacyPolicy": "link",
        "onlineComments": "link",
        "email": "test@test.com",
        "phone": "(919)456-2345",
        "address": "asdasdasdas"
    }
}

function createDisplay() {
    // The selector for the container where the summary will be viewed. Ex) #idName, .className
    var containerSelector = '.policyDisplay';
    var $summary = $(containerSelector).html('');
    // Summary Title
    var $header = $('<header id="infoDisplay"></header>');
    var $keyList = $('<div id="key-list"><ul><li class="key-item"><div class="alert green">&#10003</div><p>&nbspSecure</p></li><li class="key-item"><div class="alert yellow">&#8252</div><p>&nbspAware</p></li><li class="key-item"><div class="alert red">&#8252</div><p>&nbspAlert</p></li><li class="key-item"><div class="alert pink">&quest;</div><p>&nbspQuestion</p></li><li class="key-item"><p id="mpn-contact-anchor">Contact</p></li></ul>' );
    var $scrollUp = $('<div id="scrollUp">- Back To Top -</div>');
    //var $contactScroll = $('<p id="mpn-contact-anchor">Contact</p>');
    //var $download = $('<a href="src/js/app.js" download="Download">Download</a>');
    $header.append($keyList);

    // HIPAA Info
    var $hipaa = $('<div class="mpn-hipaa-container"></div>');
    var $hipaaInfo = $('<div class="hipaa-info"></div>');

    // "Yes", "No" icon functions and variables
    function noWithJson(json) {
        var no = '<div class="answer" id="no"><i class="test">&#10008</i><h2>' + json + '</h2></div>';
        return no;
    }
    function yesWithJson(json) {
        var yes = '<div class="answer" id="yes"><i class="test">&#10004</i><h2>' + json + '</h2></div>';
        return yes;
    }
    var $noWithoutJson = '<div class="answer" id="no"><i class="test">&#10008</i><h2>No</h2></div>';
    var $yesWithoutJson = '<div class="answer" id="yes"><i class="test">&#10004</i><h2>Yes</h2></div>';

    function setContainer(id, text, arrowClass) {
       var $statementContainer;
      if (id === 'red') {
        $statementContainer = '<div class="answer"><div class="alert red">&#8252</div><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass +'>&#10095</p></div></div>';
      } else if (id === 'yellow') {
        $statementContainer = '<div class="answer"><div class="alert yellow">&#8252</div><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass + '>&#10095</p></div></div>';
      } else {
        $statementContainer = '<div class="answer"><div class="alert green">&#10003</div><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass + '>&#10095</p></div></div>';
      }
      return $statementContainer;
    }

    $hipaa.append('<h3>HIPAA:</h3>');
    $hipaa.append($hipaaInfo)
    if (mpnData.hipaa.protected === 'Yes') {
        $hipaaInfo.append('<p>Some of the health data we collect as part of this product also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices for more information. </p>');
        if (mpnData.hipaa.noticeUrl) {
            $hipaaInfo.append('<a href=' + mpnData.hipaa.noticeUrl + ' target="_blank">HIPAA Notice of Privacy Practices</a>');
        }
    } else if (mpnData.hipaa.protected === 'No') {
        $hipaaInfo.append('<p>Please note that the health data we collect as part of this product are not protected by HIPAA and our company’s HIPAA Notice of Privacy Practices does not apply.</p>');
    } else {
        $hipaaInfo.append('<p>The developer of this product is not a HIPAA covered entity.</p>');
    }
    // Data Usage Info
    var $use = $('<div class="mpn-use-container"></div>');
    var $useInfo = $('<div class="use-info"></div>');
    $use.append("<h3>Use:</h3>");
    $use.append($useInfo);
    $useInfo.append('<h5>We collect and use your identifiable data:</h5>');
    var $useList = $('<ul>');
    $useInfo.append($useList);
    if (mpnData.use.primaryService) {
        $useList.append('<li><p>&#9642; To provide the primary service of this product</p></li>');
    }
    if (mpnData.use.marketing) {
        $useList.append('<li><p>&#9642; To develop marketing materials for our products</p></li>');
    }
    if (mpnData.use.scientificResearch) {
        $useList.append('<li><p>&#9642; To conduct scientific research</p></li>');
    }
    if (mpnData.use.companyOps) {
        $useList.append('<li><p>&#9642; For company operations (e.g., quality control or fraud detection)</p></li>');
    }
    if (mpnData.use.development) {
        $useList.append('<li><p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p></li>');
    }
    if (mpnData.use.other) {
        $useList.append('<li><p>&#9642; ' + mpnData.use.otherDescription + '</p></li>');
    }
    $useInfo.append("</ul>");

    // Identifiable data share/sell
    var $yourId = $('<div class="mpn-id-container"></div>');
    var $yourIdShare = $('<div class="id-share"></div>');
    var $yourIdSell = $('<div class="id-sell"></div>');
    var $idShareInfo = $('<div class="share-info idShareHide"></div>');
    var $idSellInfo = $('<div class="sell-info idSellHide"></div>');
    $yourId.append("<h3>Your Identifiable Data:</h3>");
    $yourId.append($yourIdShare);
    $yourId.append($yourIdSell);
    if (mpnData.share.noneWithId == false) {
        $yourIdShare.append(setContainer('green', 'We do not share your indentifiable data.', 'idShare-arrow'));
        $yourIdShare.append($idShareInfo);
        $idShareInfo.append('<p>We DO NOT share your identifiable data</p>');
    } else {
        $yourIdShare.append(setContainer('red', 'We share your indentifiable data.', 'idShare-arrow'));
        $yourIdShare.append($idShareInfo);
        $idShareInfo.append("<h5>We share your data:</h5>");
        if (mpnData.share.primaryServiceWithId) {
            $idShareInfo.append('<p>&#9642; To provide the primary service of the product</p>');
        }
        if (mpnData.share.scientificResearchWithId) {
            $idShareInfo.append('<p>&#9642; To conduct scientific research</p>');
        }
        if (mpnData.share.companyOpsWithId) {
            $idShareInfo.append('<p>&#9642; For company operations (e.g., quality control or fraud detection)</p>');
        }
        if (mpnData.share.developmentWithId) {
            $idShareInfo.append('<p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p>');
        }
        if (mpnData.share.otherWithId) {
            $idShareInfo.append('<p>&#9642; ' + mpnData.share.otherDescriptionWithId + '</p>');
        }
    }
    if (mpnData.sell.dataWithId === "Yes") {
      $yourIdSell.append(setContainer('red', 'We sell your identifiable data.', 'idSell-arrow'));
        $yourIdSell.append($idSellInfo);
        $idSellInfo.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else if (mpnData.sell.dataWithId === "Yes. With your permission,") {
        $yourIdSell.append(setContainer('alert', 'With your permission, we sell your identifiable data.', 'idSell-arrow'));
        $yourIdSell.append($idSellInfo);
        $$idSellInfo.append("<p>With your permission, we sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else {
        $yourIdSell.append(setContainer('green', 'We do not sell your identifiable data.', 'idSell-arrow'));
        $yourIdSell.append($idSellButton);
        $yourIdSell.append($idSellInfo);
        $idSellInfo.append("<p>We do not sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    }

    // Non Id share/sell
    var $yourNonId = $('<div class="mpn-nonId-container"></div>');
    var $yourNonIdShare = $('<div class="nonId-share"></div>');
    var $yourNonIdSell = $('<div class="nonId-sell"></div>');
    var $nonIdShareInfo = $('<div class="share-info nonShareHide"></div>');
    var $nonIdSellInfo = $('<div class="sell-info nonSellHide"></div>');
    $yourNonId.append("<h3>Your Non-Identifiable Data:</h3>");
    $yourNonId.append($yourNonIdShare);
    $yourNonId.append($yourNonIdSell);
    if (mpnData.share.noneNoId === true) {
        $yourNonIdShare.append(setContainer('green', 'We do not share your non-identifiable data.', 'nonIdShare-arrow'));
        $yourNonIdShare.append($nonIdShareInfo);
        $nonIdShareInfo.append('<p>We DO NOT share your data after removing identifiers</p>');
    } else {
        $yourNonIdShare.append(setContainer('red', 'We share your non-identifiable data.', 'nonIdShare-arrow'));
        $yourNonIdShare.append($nonIdShareInfo);
        $nonIdShareInfo.append("<h5>We share your data AFTER removing identifiers:</h5>");
        if (mpnData.share.primaryServiceNoId) {
            $nonIdShareInfo.append('<p>&#9642; To provide the primary service of the product</p>');
        }
        if (mpnData.share.scientificResearchNoId) {
            $nonIdShareInfo.append('<p>&#9642; To conduct scientific research</p>');
        }
        if (mpnData.share.companyOpsNoId) {
            $nonIdShareInfo.append('<p>&#9642; For company operations (e.g., quality control or fraud detection)</p>');
        }
        if (mpnData.share.developmentNoId) {
            $nonIdShareInfo.append('<p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p>');
        }
        if (mpnData.share.otherNoId) {
            $nonIdShare.append('<p>&#9642; ' + mpnData.share.otherDescriptionNoId + '</p>');
        }
    }
    if (mpnData.sell.dataNoId === "Yes") {
        $yourNonIdSell.append(setContainer('red', 'We sell your non-identifiable data', 'nonIdSell-arrow'));
        $yourNonIdSell.append($nonIdSellInfo);
        $nonIdSellInfo.append("<p>We sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else if (mpnData.sell.dataNoId === "Yes. With your permission,") {
        $yourNonIdSell.append(setContainer('yellow', 'With your permission, we sell your non-identifiable data.', 'nonIdSell-arrow'));
        $yourNonIdSell.append($nonIdSellInfo);
        $nonIdSellInfo.append("<p>With your permission, we sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else {
          $yourNonIdSell.append(setContainer('green', 'We do not sell your non-identifiable data.', 'nonIdSell-arrow'));
        $yourNonIdSell.append($nonIdSellInfo);
        $nonIdSellInfo.append("<p>We do not sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
    }

    $nonIdSellInfo.append("<p>(note that remaining data may still not be completely anonymous)</p>");

    // Data Encryption Info
    var $encryption = $('<div class="mpn-encryption-container"></div>');
    var $encryptionLocal = $('<div class="encrypt-local"></div>');
    var $encryptionServer = $('<div class="encrypt-third"></div>');
    var $encryptionTransmit = $('<div class="encrypt-trans"></div>');
    var yesDefault = "Yes, by default";
    var yesSteps = "Yes, when you take certain steps";
    $encryption.append("<h3>Encryption:</h3>");
    $encryption.append($encryptionLocal);
    'We encrypt your data within your device or app'
    if (mpnData.encryption.device === yesDefault) {
        $encryptionLocal.append(setContainer('green', 'By default, we encrypt your data within your device or app.'));
    } else if (mpnData.encryption.device === yesSteps) {
        $encryptionLocal.append(setContainer('yellow', 'When you take certain steps, we encrypt your data within your device or app.'));
    } else if (mpnData.encryption.device === "No") {
        $encryptionLocal.append(setContainer('red', 'We do not encrypt your data.'));
    } else {
        $encryptionLocal.append('<p>' + mpnData.encryption.device + '</p>');
    }
    $encryption.append($encryptionServer);
    if (mpnData.encryption.server === yesDefault) {
        $encryptionServer.append(setContainer('green', 'By default, we encrypt your data when stored on our company servers or on the cloud.'));
    } else if (mpnData.encryption.server === yesSteps) {
        $encryptionServer.append(setContainer('yellow', 'When you take certain steps, we encrypt your data when stored on our company servers or on the cloud.'));
    } else if (mpnData.encryption.server === "No") {
        $encryptionServer.append(setContainer('red', 'We do not encrypt your data when stored on our company servers or on the cloud.'));
    } else {
        $encryptionServer.append('<p>' + mpnData.encryption.server + '</p>');
    }
    $encryption.append($encryptionTransmit);
    if (mpnData.encryption.transmit === yesDefault) {
        $encryptionTransmit.append(setContainer('green', 'By default, we encrypt your data while it is transmitted.'));
    } else if (mpnData.encryption.transmit === yesSteps) {
        $encryptionTransmit.append(setContainer('yellow', 'When you take certain steps, we encrypt your data while it is transmitted.'));
    } else if (mpnData.encryption.transmit === "No") {
        $encryptionTransmit.append(setContainer('red', 'We do not encrypt your data while it is transmitted.'));
    } else {
        $encryptionTransmit.append('<p>' + mpnData.encryption.transmit + '</p>');
    }

    // Data Storing Info
    var $store = $('<div class="mpn-data-storage-container"></div>');
    var $local = $('<div class="local-storage"></div>');
    var $third = $('<div class="third-storage"></div>');
    $store.append("<h3>Data Storage:</h3>");
    $store.append($local);
    if (mpnData.store.device === 'Yes') {
        $local.append(setContainer('yellow', 'Your data is stored on your device.'));
    } else {
        $local.append(setContainer('yellow', 'Your data is not stored on your device.'));
    }
    $store.append($third);
    if (mpnData.store.external === "Yes") {
        $third.append(setContainer('yellow', ' We store your data at our company or through a third party.'));
    } else {
        $third.append(setContainer('yellow', ' We do not store your data at our company or through a third party.'));
    }

    // User Options Info
    var $user = $('<div class="mpn-user-access-container"></div>');
    var $userQuestion = $('<div id="user-qid"></div>');
    var $userOptions = $('<div class="user-options"></div>');
    $user.append("<h3>User Options:</h3>");
    $user.append($userQuestion);
    $userQuestion.append('<div class="answer"><div class="alert pink">&quest;</div><h4>What can you do with your data?</h4></div>');
    $userQuestion.append($userOptions);
    if (mpnData.user.hasOptions === 'Yes') {
        $userOptions.append("<h5>You can:</h5>");
        if (mpnData.user.access) {
            $userOptions.append("<p>&#9642; Access the data</p>");
        }
        if (mpnData.user.edit) {
            $userOptions.append("<p>&#9642; Edit the data</p>");
        }
        if (mpnData.user.share) {
            $userOptions.append("<p>&#9642; Share the data</p>");
        }
        if (mpnData.user.delete) {
            $userOptions.append("<p>&#9642; Delete the data</p>");
        }
    } else if (mpnData.user.hasOptions === 'No') {
        $userOptions.append("<p>You can not access the data</p>");
    }

    // Privacy Info
    var $privacy = $('<div class="mpn-privacy-container"></div>');
    var $privacyAccess = $('<div class="privacy-access"></div>');
    var $privacyAccessInfo = $('<div class="privacy-access-info  privacyHide"></div>');
    var $privacySocial = $('<div class="privacy-social"></div>');
    $privacy.append("<h3>Privacy:</h3>");
    $privacy.append($privacyAccess);
    if (mpnData.privacy.requestPermissions === 'Yes') {
        $privacyAccess.append(setContainer('yellow', 'We will request access to device data or applications.', 'privacy-arrow'));
        $privacyAccess.append($privacyAccessInfo);
        $privacyAccessInfo.append('<h5>We will request access to:</h5>')
        if (mpnData.privacy.camera) {
            $privacyAccessInfo.append('<p>&#9642; Camera</p>');
        }
        if (mpnData.privacy.photos) {
            $privacyAccessInfo.append('<p>&#9642; Photos</p>');
        }
        if (mpnData.privacy.contact) {
            $privacyAccessInfo.append('<p>&#9642; Contacts</p>');
        }
        if (mpnData.privacy.location) {
            $privacyAccessInfo.append('<p>&#9642; Location Services</p>');
        }
        if (mpnData.privacy.microphone) {
            $privacyAccessInfo.append('<p>&#9642; Microphone</p>');
        }
        if (mpnData.privacy.health) {
            $privacyAccessInfo.append('<p>&#9642; Health monitoring devices</p>');
        }
        if (mpnData.privacy.other) {
            $privacyAccessInfo.append('<p>&#9642; ' + mpnData.privacy.otherDescription + '</p>');
        }
    } else if (mpnData.privacy.requestPermissions === 'No') {
        $privacy.append(setContainer('green', 'We will not request access to device data or applications.'));
    }
    $privacy.append($privacySocial);
    if (mpnData.privacy.socialMedia === 'Yes') {
        $privacySocial.append(setContainer('red', 'We share your data with social media accounts (eg.Facebook).'));
    } else if (mpnData.privacy.socialMedia === 'Yes, only with your permission') {
        $privacySocial.append(setContainer('yellow', 'With your permission , we share your data with social media accounts (eg.Facebook).'));
    } else {
        $privacySocial.append(setContainer('green', 'We  do not share your data with social media accounts (eg.Facebook).'));
    }

    // Deactivation Info
    var $deactivation = $('<div class="mpn-deactivation-container"></div>');
    var $deactivationInfo = $('<div class="deactivation-info"></div>');
    $deactivation.append("<h3>Deactivation:</h3>");
    $deactivation.append($deactivationInfo);
    var $deactivationStatement = ("<p>When your account is deactivated/terminated (by you or by the company), your data is&nbsp");
    if (mpnData.deactivation.action) {
        switch (mpnData.deactivation.action) {
            case "deleteImmediately":
                $deactivationInfo.append($deactivationStatement + "deleted Immediately.</p>");
                break;
            case "deleteAfterXYears":
                $deactivationInfo.append($deactivationStatement + "deleted After " + mpnData.deactivation.numYears + " years.</p>");
                break;
            case "neverDelete":
                $deactivationInfo.append($deactivationStatement + "permanently retained and used.</p>");
                break;
            case "deleteOnRequest":
                $deactivationInfo.append($deactivationStatement + "retained and used until the user requests deletion.</p>");
                break;
        }
    }
    // Policy Info
    var $policy = $('<div class="mpn-policy-container"></div>');
    var $policyQuestion = $('<div class="policy-question"></div>');
    var $policyInfo = $('<div class="policy-info"></div>');
    $policy.append("<h3>Policy Changes:</h3>");
    $policy.append($policyQuestion);
    $policyQuestion.append('<div class="answer"><div class="alert pink">&quest;</div><h4>How will we notify you if our privacy policy changes?</h4></div>');
    if (mpnData.policy.notificationMethod) {
        var $formText = $('<p>').text(mpnData.policy.notificationMethod);
        $policyQuestion.append($policyInfo);
        $policyInfo.append($formText);
    }
    // Breach Info
    var $breach = $('<div class="mpn-breach-container"></div>');
    var $breachQuestion = $('<div class="breach-question"></div>');
    var $breachInfo = $('<div class="breach-info"></div>');
    $breach.append("<h3> Data Breach:</h3>");
    $breach.append($breachQuestion);
    $breachQuestion.append('<div class="answer"><div class="alert pink">&quest;</div><h4>How will we notify you and protect your data in case of an improper disclosure?</h4></div>');
    if (mpnData.breach.procedure) {
        var $formText = mpnData.breach.procedure;
        $breachQuestion.append($breachInfo);
        $breachInfo.append('<p>' + $formText + '</p>');
    }
    // Contact Info
    var $contact = $('<div class="mpn-contact-container"></div>');
    var $contactInfo = $('<div class="contact-info"></div>');
    $contact.append("<h3>Contact Information:</h3>");
    $contact.append($contactInfo);
    if (mpnData.contact.name) {
        var $formTitle = $('<i class-"contact-title">').text("Name: ")
        var $formText = $('<p>').text(mpnData.contact.name);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    if (mpnData.contact.privacyPolicy) {
        var $formTitle = $('<i class-"contact-title">').text("Link to full privacy policy: ")
        var $formText = $('<a>').text(mpnData.contact.privacyPolicy);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    if (mpnData.contact.onlineComments) {
        var $formTitle = $('<i class-"contact-title">').text("Link to Online Comment/Contact Form:  ")
        var $formText = $('<a>').text(mpnData.contact.onlineComments);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    if (mpnData.contact.email) {
        var $formTitle = $('<i class-"contact-title">').text("Email Address: ")
        var $formText = $('<p>').text(mpnData.contact.email);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    if (mpnData.contact.phone) {
        var $formTitle = $('<i class-"contact-title">').text("Phone Number: ")
        var $formText = $('<p>').text(mpnData.contact.phone);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    if (mpnData.contact.address) {
        var $formTitle = $('<i class-"contact-title">').text("Address: ")
        var $formText = $('<p>').text(mpnData.contact.address);
        $contactInfo.append($formTitle).append($formText).append('<br>');
    }
    // Compile all summary sections
    $summary.append($header).append($scrollUp).append($hipaa).append($use).append($yourId).append($yourNonId).append($encryption).append($store).append($user).append($privacy).append($deactivation).append($policy).append($breach).append($contact);
}

// Event listeners
  // Contact Button
$(document).on("click", "#mpn-contact-anchor", function(event) {
    event.preventDefault();
    $("body, html").animate({
        scrollTop: $('.mpn-contact-container').offset().top
    }, 600);
});
  // Mobile scroll up button
$(document).on("click", "#scrollUp", function(event) {
    //event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 600);
});

$( document ).ready(function() {
    $('.key-item').addClass('active');
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    var width = $(window).width()
    //header symbol animation
     if (height  < 80 ) {
      $('.key-item').addClass('active');
    }

    if (height  > 100 ) {
      $('.key-item').removeClass('active');
    }
    //mobile scroll to top button
    if(height  >  650 && width < 500) {
      $("#scrollUp").css('display', 'inherit');
    }
    if(height < 500 && width < 500) {
      $("#scrollUp").css('display', 'none');
    }
});
  // checks if "info" section has display: none. toggles betweeen hide/show
function toggleHide(target, button) {
    textArrow(button)
    if ($(target).is(":hidden")) {
        $(target).slideDown();
    } else {
        $(target).slideUp();
    }
    return false;
}
  // More/Less button active class toggle
function textArrow(target) {
    $(target).toggleClass("active");
    // if ($(target).hasClass("active")) {
    //     $('#info-arrow').html("Less&nbsp");
    // } else {
    //     $('#info-arrow').html("More&nbsp");
    // }
}
   // More/Less button listeners
$(document).on("click", ".id-share", function() {
    toggleHide(".idShareHide", ".idShare-arrow");
});
$(document).on("click", ".id-sell", function() {
    toggleHide(".idSellHide", ".idSell-arrow");
});
$(document).on("click", ".nonId-sell", function() {
    toggleHide(".nonSellHide", ".nonIdSell-arrow");
});
$(document).on("click", ".nonId-share", function() {
    toggleHide(".nonShareHide", ".nonIdShare-arrow");
});
$(document).on("click", ".privacy-access", function() {
    toggleHide(".privacyHide", ".privacy-arrow");
});

createDisplay();
