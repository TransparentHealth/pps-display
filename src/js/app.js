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
    var containerSelector = '.animatedPreview';
    var $summary = $(containerSelector).html('');
    // Summary Title
    var $header = $('<header></header>');
    var $title = $('<h1>Model Privacy Notice</h1>');
    var $scrollUp = $('<div id="scrollUp">&#10094</div>');
    var $contactScroll = $('<p id="mpn-contact-anchor">Contact</p>');
    var $download = $('<a href="src/js/app.js" download="Download">Download</a>');
    $header.append($download).append($title).append($contactScroll);

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
    var $idSellButton = $('<div class="mpn-button"><p class="idSell-button">more &#8595</p></div>');
    var $idShareButton = $('<div class="mpn-button"><p class="idShare-button">more &#8595</p></div>');
    $yourId.append("<h3>Your Identifiable Data:</h3>");
    $yourId.append($yourIdShare);
    $yourId.append($yourIdSell);
    $yourIdShare.append('<h4>Do we share your indentifiable data?</h4>');
    if (mpnData.share.noneWithId) {
        $yourIdShare.append($noWithoutJson);
        $yourIdShare.append($idShareButton);
        $yourIdShare.append($idShareInfo);
        $idShareInfo.append('<p>We DO NOT share your identifiable data</p>');
    } else {
        $yourIdShare.append($yesWithoutJson);
        $yourIdShare.append($idShareButton);
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
    $yourIdSell.append('<h4>Do we sell your identifiable data?</h4>');
    if (mpnData.sell.dataWithId === "Yes") {
        $yourIdSell.append(yesWithJson(mpnData.sell.dataWithId));
        $yourIdSell.append($idSellButton);
        $yourIdSell.append($idSellInfo);
        $idSellInfo.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else if (mpnData.sell.dataWithId === "Yes. With your permission,") {
        $yourIdSell.append($yesWithoutJson);
        $yourIdSell.append($idSellButton);
        $yourIdSell.append($idSellInfo);
        $$idSellInfo.append("<p>With your permission, we sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else {
        $yourIdSell.append(noWithJson(mpnData.sell.dataWithId));
        $yourIdSell.append($idSellButton);
        $yourIdSell.append($idSellInfo);
        $idSellInfo.append("<p>We do not sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
    }

    // Non Id share/sell
    var $yourNonId = $('<div class="mpn-nonId-container"></div>');
    var $yourNonIdShare = $('<div class="id-share"></div>');
    var $yourNonIdSell = $('<div class="id-sell"></div>');
    var $nonIdShareInfo = $('<div class="share-info nonShareHide"></div>');
    var $nonIdSellInfo = $('<div class="sell-info nonSellHide"></div>');
    var $nonIdSellButton = $('<div class="mpn-button"><p class="nonIdSell-button">more &#8595</p></div>');
    var $nonIdShareButton = $('<div class="mpn-button"><p class="nonIdShare-button">more &#8595</p></div>');
    $yourNonId.append("<h3>Your Non-Identifiable Data:</h3>");
    $yourNonId.append($yourNonIdShare);
    $yourNonId.append($yourNonIdSell);
    $yourNonIdShare.append('<h4>Do we share your non-identifiable data?</h4>');
    if (mpnData.share.noneNoId) {
        $yourNonIdShare.append($noWithoutJson);
        $yourNonIdShare.append($nonIdShareButton);
        $yourNonIdShare.append($nonIdShareInfo);
        $nonIdShareInfo.append('<p>We DO NOT share your data after removing identifiers</p>');
    } else {
        $yourNonIdShare.append($yesWithoutJson);
        $yourNonIdShare.append($nonIdShareButton);
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
    $yourNonIdSell.append('<h4>Do we sell your non-identifiable data?</h4>');
    if (mpnData.sell.dataNoId === "Yes") {
        $yourNonIdSell.append(yesWithJson(mpnData.sell.dataNoId));
        $yourNonIdSell.append($nonIdSellButton);
        $yourNonIdSell.append($nonIdSellInfo);
        $nonIdSellInfo.append("<p>We sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else if (mpnData.sell.dataNoId === "Yes. With your permission,") {
        $yourNonIdSell.append($yesWithoutJson);
        $yourNonIdSell.append($nonIdSellButton);
        $yourNonIdSell.append($nonIdSellInfo);
        $nonIdSellInfo.append("<p>With your permission, we sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
    } else {
        $yourNonIdSell.append(noWithJson(mpnData.sell.dataNoId));
        $yourNonIdSell.append($nonIdSellButton);
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
    $encryptionLocal.append("<h4>Do we encrypt your data within your device or app?</h4>");
    if (mpnData.encryption.device === yesDefault) {
        $encryptionLocal.append($yesWithoutJson + '<p>By default</p>');
    } else if (mpnData.encryption.device === yesSteps) {
        $encryptionLocal.append($yesWithoutJson + '<p>When you take certain steps</p>');
    } else if (mpnData.encryption.device === "No") {
        $encryptionLocal.append(noWithJson(mpnData.encryption.device));
    } else {
        $encryptionLocal.append('<p>' + mpnData.encryption.device + '</p>');
    }
    $encryption.append($encryptionServer);
    $encryptionServer.append("<h4>Do we encrypt your data when stored on our company servers or on the cloud?</h4>");
    if (mpnData.encryption.server === yesDefault) {
        $encryptionServer.append($yesWithoutJson + '<p>By default</p>');
    } else if (mpnData.encryption.server === yesSteps) {
        $encryptionServer.append($yesWithoutJson + '<p>When you take certain steps</p>');
    } else if (mpnData.encryption.server === "No") {
        $encryptionServer.append(noWithJson(mpnData.encryption.server));
    } else {
        $encryptionServer.append('<p>' + mpnData.encryption.server + '</p>');
    }
    $encryption.append($encryptionTransmit);
    $encryptionTransmit.append("<h4>Do we encrypt your data while it is transmitted?</h4>");
    if (mpnData.encryption.transmit === yesDefault) {
        $encryptionTransmit.append($yesWithoutJson + '<p>By default</p>');
    } else if (mpnData.encryption.transmit === yesSteps) {
        $encryptionTransmit.append($yesWithoutJson + '<p>When you take certain steps</p>');
    } else if (mpnData.encryption.transmit === "No") {
        $encryptionTransmit.append(noWithJson(mpnData.encryption.transmit));
    } else {
        $encryptionTransmit.append('<p>' + mpnData.encryption.transmit + '</p>');
    }

    // Data Storing Info
    var $store = $('<div class="mpn-data-storage-container"></div>');
    var $local = $('<div class="local-storage"></div>');
    var $third = $('<div class="third-storage"></div>');
    $store.append("<h3>Data Storage:</h3>");
    $store.append($local);
    $local.append("<h4>Is your data stored on your own device?</h4>");
    if (mpnData.store.device === 'Yes') {
        $local.append(yesWithJson(mpnData.store.device));
    } else {
        $local.append(noWithJson(mpnData.store.device));
    }
    $store.append($third);
    $third.append("<h4>Is your data stored at our company or through a third party?</h4>");
    if (mpnData.store.external === "Yes") {
        $third.append(yesWithJson(mpnData.store.external));
    } else {
        $third.append(noWithJson(mpnData.store.external));
    }

    // User Options Info
    var $user = $('<div class="mpn-user-access-container"></div>');
    var $userQuestion = $('<div class="user-question" id="user-qid"></div>');
    var $userOptions = $('<div class="user-options"></div>');
    $user.append("<h3>User Options:</h3>");
    $user.append($userQuestion);
    $userQuestion.append("<h4>What can you do with your data?</h4>");
    $user.append($userOptions);
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
    var $privacyButton = $('<div class="mpn-button"><p class="privacy-button">more &#8595</p></div>');
    $privacy.append("<h3>Privacy:</h3>");
    $privacy.append($privacyAccess);
    $privacyAccess.append("<h4>Will we request access to other device data or applications?</h4>");
    if (mpnData.privacy.requestPermissions === 'Yes') {
        $privacyAccess.append($yesWithoutJson);
        $privacyAccess.append($privacyButton);
        $privacy.append($privacyAccessInfo);
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
        $privacy.append($noWithoutJson);
        $privacyAccess.append($privacyButton);
    }
    $privacy.append($privacySocial);
    $privacySocial.append("<h4>Do we share your data with social media accounts (eg.Facebook)?</h4>");
    if (mpnData.privacy.socialMedia === 'Yes') {
        $privacySocial.append($yesWithoutJson);
    } else if (mpnData.privacy.socialMedia === 'Yes, only with your permission') {
        $privacySocial.append($yesWithoutJson + '<p>Only with your permission</p>');
    } else {
        $privacySocial.append($noWithoutJson);
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
                $deactivationInfo.append($deactivationStatement + "deleted Immediately</p>");
                break;
            case "deleteAfterXYears":
                $deactivationInfo.append($deactivationStatement + "deleted After " + mpnData.deactivation.numYears + " years</p>");
                break;
            case "neverDelete":
                $deactivationInfo.append($deactivationStatement + "permanently retained and used</p>");
                break;
            case "deleteOnRequest":
                $deactivationInfo.append($deactivationStatement + "retained and used until the user requests deletion</p>");
                break;
        }
    }
    // Policy Info
    var $policy = $('<div class="mpn-policy-container"></div>');
    var $policyInfo = $('<div class="policy-info"></div>');
    $policy.append("<h3>Policy Changes:</h3>");
    $policy.append($policyInfo);
    $policyInfo.append('<h5>How we will notify you if our privacy policy changes:</h5>')
    if (mpnData.policy.notificationMethod) {
        var $formText = $('<p>').text(mpnData.policy.notificationMethod);
        $policyInfo.append($formText);
    }
    // Breach Info
    var $breach = $('<div class="mpn-breach-container"></div>');
    var $breachInfo = $('<div class="breach-info"></div>');
    $breach.append("<h3> Data Breach:</h3>");
    $breach.append($breachInfo);
    $breachInfo.append('<h5>How we will notify you and protect your data in case of an improper disclosure:</h5>')
    if (mpnData.breach.procedure) {
        var $formText = mpnData.breach.procedure;
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
    if ($(target).hasClass("active")) {
        $(target).html("Less &#8593");
    } else {
        $(target).html("More &#8595");
    }
}
   // More/Less button listeners
$(document).on("click", ".idShare-button", function() {
    toggleHide(".idShareHide", ".idShare-button");
});
$(document).on("click", ".idSell-button", function() {
    toggleHide(".idSellHide", ".idSell-button");
});
$(document).on("click", ".nonIdSell-button", function() {
    toggleHide(".nonSellHide", ".nonIdSell-button");
});
$(document).on("click", ".nonIdShare-button", function() {
    toggleHide(".nonShareHide", ".nonIdShare-button");
});
$(document).on("click", ".privacy-button", function() {
    toggleHide(".privacyHide", ".privacy-button");
});

createDisplay();
