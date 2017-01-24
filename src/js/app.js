
var mpnData = {
     "hipaa" : {
    "protected": "Yes",
    "noticeUrl": "www.Dude.com"
  },
    "use" : {
    "primaryService": true,
    "marketing": true,
    "scientificResearch": true
}, "share" : {
    "primaryServiceWithId": true,
    "scientificResearchWithId": true,
    "companyOpsWithId": true,
    "primaryServiceNoId": true,
    "scientificResearchNoId": true,
    "companyOpsNoId": true
}, "sell" : {
    "dataWithId": "Yes",
    "dataNoId": "Yes. With your permission,"
}, "store" : {
    "device": "Yes",
    "external": "No"
}, "encryption" : {
    "device": "Yes, by default",
    "server": "Yes, when you take certain steps",
    "transmit": "No"
}, "privacy" : {
    "requestPermissions": "Yes",
    "camera": true,
    "photos": true,
    "contact": true,
    "socialMedia": "No"
}, "user" : {
    "hasOptions": "Yes",
    "access": true,
    "edit": true
}, "deactivation" : {
    "action": "deleteImmediately"
}, "policy" : {
    "notificationMethod": "Telegraph"
}, "breach" : {
    "procedure": "Don't know"
}, "contact" : {
    "name": "dasd",
    "privacyPolicy": "asdasd",
    "onlineComments": "asdsad",
    "phone": "dasd",
    "address": "asdasdsada"
}}



function createDisplay() {
// The selector for the container where the summary will be viewed. Ex) #idName, .className
var containerSelector = '.animatedPreview';
var $summary = $(containerSelector).html('');
// Summary Title
var $title = $('<h3>Summary</h3>');
// HIPAA Info
var $hipaa = $('<div class="hipaa-container"></div>');
var $hipaaInfo = $('<div class="hipaa-info"></div>');
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
var $use = $('<div class="use-container"></div>');
var $useInfo = $('<div class="use-info"></div>');
$use.append("<h3>USE:</h3>");
$use.append($useInfo);
$useInfo.append('<h5>We collect and use your identifiable data:</h5>');
var $useList = $('<ul>');
$useInfo.append($useList);
if (mpnData.use.primaryService) {
    $useList.append('<li>To provide the primary service of this product</li>');
}
if (mpnData.use.marketing) {
    $useList.append('<li>To develop marketing materials for our products</li>');
}
if (mpnData.use.scientificResearch) {
    $useList.append('<li>To conduct scientific research</li>');
}
if (mpnData.use.companyOps) {
    $useList.append('<li>For company operations (e.g., quality control or fraud detection)</li>');
}
if (mpnData.use.development) {
    $useList.append('<li>To develop and improve new and current products and services (e.g., analytics)</li>');
}
if (mpnData.use.other) {
    $useList.append('<li>' + mpnData.use.otherDescription + '</li>');
}
$useInfo.append("</ul>");

// Identifiable data share/sell
var $yourId = $('<div class="id-container"></div>');
var $yourIdShare = $('<div class="id-share"></div>');
var $yourIdSell = $('<div class="id-sell"></div>');
var $idShareInfo = $('<div class="share-info"></div>');
var $idSellInfo = $('<div class="sell-info"></div>');
$yourId.append("<h3>Your identifiable Data:</h3>");
$yourId.append($yourIdShare);
$yourId.append($yourIdSell);
$yourIdShare.append('<h4>Do we share your indentifiable data?</h4>');
if (mpnData.share.noneWithId) {
  $yourIdShare.append('<p class="answer">No</p>');
  $yourIdShare.append($idShareInfo);
    $idShareInfo.append('<p>We DO NOT share your identifiable data</p>');
} else {
    $yourIdShare.append('<p class="answer"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbspYes</p>');
    $yourIdShare.append($idShareInfo);
    $idShareInfo.append("<h5>We share your data:</h5>");
    if (mpnData.share.primaryServiceWithId) {
        $idShareInfo.append('<p>To provide the primary service of the product</p>');
    }
    if (mpnData.share.scientificResearchWithId) {
        $idShareInfo.append('<p>To conduct scientific research</p>');
    }
    if (mpnData.share.companyOpsWithId) {
        $idShareInfo.append('<p>For company operations (e.g., quality control or fraud detection)</p>');
    }
    if (mpnData.share.developmentWithId) {
        $idShareInfo.append('<p>To develop and improve new and current products and services (e.g., analytics)</p>');
    }
    if (mpnData.share.otherWithId) {
        $yourIdShare.append('<p>' + mpnData.share.otherDescriptionWithId + '</p>');
    }
}
$yourIdSell.append('<h4>Do we sell your identifiable data?</h4>');
if (mpnData.sell.dataWithId === "Yes") {
    $yourIdSell.append('<p class="answer"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp' + mpnData.sell.dataWithId + '</p>');
    $yourIdSell.append($idSellInfo);
    $idSellInfo.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
} else if (mpnData.sell.dataWithId === "Yes. With your permission,") {
  $yourIdSell.append('<p><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbspYes</p>');
  $yourIdSell.append($idSellInfo);
  $$idSellInfo.append("<p>With your permission, we sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
} else {
  $yourIdSell.append('<p class="answer">' + mpnData.sell.dataWithId + '</p>');
  $yourIdSell.append($idSellInfo);
  $$idSellInfo.append("<p>We do not sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
}


// Non Id share/sell
var $yourNonId = $('<div class="nonId-container"></div>');
var $yourNonIdShare = $('<div class="id-share"></div>');
var $yourNonIdSell = $('<div class="id-sell"></div>');
var $nonIdShareInfo = $('<div class="share-info"></div>');
var $nonIdSellInfo = $('<div class="sell-info"></div>');
$yourNonId.append("<h3>Your non-identifiable Data:</h3>");
$yourNonId.append($yourNonIdShare);
$yourNonId.append($yourNonIdSell);
$yourNonIdShare.append('<h4>Do we share your non-identifiable data?</h4>');
if (mpnData.share.noneNoId) {
    $yourNonIdShare.append('<p class="answer">No</p>');
    $nonIdShare.append($nonIdShareInfo);
    $$nonIdShareInfo.append('<p>We DO NOT share your data after removing identifiers</p>');
} else {
    $yourNonIdShare.append('<p class="answer"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbspYes</p>');
    $yourNonIdShare.append($nonIdShareInfo);
    $nonIdShareInfo.append("<h5>We share your data AFTER removing identifiers:</h5>");
    if (mpnData.share.primaryServiceNoId) {
        $nonIdShareInfo.append('<p>To provide the primary service of the product</p>');
    }
    if (mpnData.share.scientificResearchNoId) {
        $nonIdShareInfo.append('<p>To conduct scientific research</p>');
    }
    if (mpnData.share.companyOpsNoId) {
        $nonIdShareInfo.append('<p>For company operations (e.g., quality control or fraud detection)</p>');
    }
    if (mpnData.share.developmentNoId) {
        $nonIdShareInfo.append('<p>To develop and improve new and current products and services (e.g., analytics)</p>');
    }
    if (mpnData.share.otherNoId) {
          $nonIdShare.append('<p>' + mpnData.share.otherDescriptionNoId + '</p>');
    }
}
$yourNonIdSell.append('<h4>Do we sell your non-identifiable data?</h4>');
if (mpnData.sell.dataNoId === "Yes") {
    $yourNonIdSell.append('<p class="answer"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp' + mpnData.sell.dataNoId +  '</p>');
    $yourNonIdSell.append($nonIdSellInfo);
    $nonIdSellInfo.append("<p>We sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
} else if (mpnData.sell.dataNoId === "Yes. With your permission,") {
  $yourNonIdSell.append('<p class="answer"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbspYes</p>');
  $yourNonIdSell.append($nonIdSellInfo);
  $nonIdSellInfo.append("<p>With your permission, we sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
} else {
  $yourNonIdSell.append('<p class="answer">' + mpnData.sell.dataNoId +  '</p>');
  $yourNonIdSell.append($nonIdSellInfo);
  $nonIdSellInfo.append("<p>We do not sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>");
}

$nonIdSellInfo.append("<p>(note that remaining data may still not be completely anonymous)</p>");


// Data Storing Info
var $store = $('<div></div>');
$store.append("<h3>Storing Data: How we store your data</h3>");
$store.append("<p>Is your data stored on your own device?</p>");
if (mpnData.store.device) {
    $store.append('<p>' + mpnData.store.device + '</p>');
}
$store.append("<p>Is your data stored outside your own device at our company or through a third party?</p>");
if (mpnData.store.external) {
    $store.append('<p>' + mpnData.store.external + '</p>');
}
// Data Encryption Info
var $encryption = $('<div></div>');
$encryption.append("<h3>Encryption: How we encrypt your data</h3>");
$encryption.append("<p>Does our product encrypt your data within your device or app?</p>");
if (mpnData.encryption.device) {
    $encryption.append('<p>' + mpnData.encryption.device + '</p>');
}
$encryption.append("<p>Does our product encrypt your data when stored on our company servers or with an outside cloud computing services provider?</p>");
if (mpnData.encryption.server) {
    $encryption.append('<p>' + mpnData.encryption.server + '</p>');
}
$encryption.append("<p>Does our product encrypt your data while it is transmitted?</p>");
if (mpnData.encryption.transmit) {
    $encryption.append('<p>' + mpnData.encryption.transmit + '</p>');
}
// Privacy Info
var $privacy = $('<div></div>');
$privacy.append("<h3>Privacy: How our product accesses your device data</h3>");
$privacy.append("<p>Will our product request access to other device data or applications, such as your camera, photos, or contacts?</p>");
if (mpnData.privacy.requestPermissions === 'Yes') {
    $privacy.append('<p>Yes: </p>');
    if (mpnData.privacy.camera) {
        $privacy.append('<p>Camera</p>');
    }
    if (mpnData.privacy.photos) {
        $privacy.append('<p>Photos</p>');
    }
    if (mpnData.privacy.contact) {
        $privacy.append('<p>Contacts</p>');
    }
    if (mpnData.privacy.location) {
        $privacy.append('<p>Location Services</p>');
    }
    if (mpnData.privacy.microphone) {
        $privacy.append('<p>Microphone</p>');
    }
    if (mpnData.privacy.health) {
        $privacy.append('<p>Health monitoring devices</p>');
    }
    if (mpnData.privacy.other) {
        $privacy.append('<p>' + mpnData.privacy.otherDescription + '</p>');
    }
} else if (mpnData.privacy.requestPermissions === 'No') {
    $privacy.append('<p>No</p>');
}
$privacy.append("<p>Does your product share the user's data with social media accounts, like Facebook?</p>");
if (mpnData.privacy.socialMedia) {
    $privacy.append('<p>' + mpnData.privacy.socialMedia + '</p>');
}
// User Options Info
var $user = $('<div></div>');
$user.append("<h3>User Options: What you can do with the data our product collects</h3>");
$user.append("<p>Can you access, edit, share, or delete the data our product has about you?</p>");
if (mpnData.user.hasOptions === 'Yes') {
    $user.append("<p>Yes. You can...</p>");
    if (mpnData.user.access) {
        $user.append("<p>Access the data</p>");
    }
    if (mpnData.user.edit) {
        $user.append("<p>Edit the data</p>");
    }
    if (mpnData.user.share) {
        $user.append("<p>Share the data</p>");
    }
    if (mpnData.user.delete) {
        $user.append("<p>Delete the data</p>");
    }
} else if (mpnData.user.hasOptions === 'No') {
    $user.append("<p>No</p>");
}
// Deactivation Info
var $deactivation = $('<div></div>');
$deactivation.append("<h3>Deactivation: What happens to your data when your account is deactivated</h3>");
$deactivation.append("<p>When your account is deactivated/terminated (by you or by the company), your data is…</p>");
if (mpnData.deactivation.action) {
    switch (mpnData.deactivation.action) {
        case "deleteImmediately":
            $deactivation.append("<p>Deleted Immediately</p>");
            break;
        case "deleteAfterXYears":
            $deactivation.append("<p>Deleted After " + mpnData.deactivation.numYears + " years</p>");
            break;
        case "neverDelete":
            $deactivation.append("<p>Permanently retained and used</p>");
            break;
        case "deleteOnRequest":
            $deactivation.append("<p>Retained and used until the user requests deletion</p>");
            break;
    }
}
// Policy Info
var $policy = $('<div></div>');
$policy.append("<h3>Policy Changes: How we will notify you if our privacy policy changes</h3>");
if (mpnData.policy.notificationMethod) {
    var $formText = $('<p>').text(mpnData.policy.notificationMethod);
    $policy.append($formText);
}
// Breach Info
var $breach = $('<div></div>');
$breach.append("<h3>Breach: How we will notify you and protect your data in case of an improper disclosure</h3>");
if (mpnData.breach.procedure) {
    var $formText = $('<p>').text(mpnData.breach.procedure);
    $breach.append($formText);
}
// Contact Info
var $contact = $('<div></div>');
$contact.append("<h3>Contact Information</h3>");
if (mpnData.contact.name) {
    var $formText = $('<p>').text("Name: " + mpnData.contact.name);
    $contact.append($formText);
}
if (mpnData.contact.privacyPolicy) {
    var $formText = $('<p>').text("Link to full privacy policy: " + mpnData.contact.privacyPolicy);
    $contact.append($formText);
}
if (mpnData.contact.onlineComments) {
    var $formText = $('<p>').text("Link to Online Comment/Contact Form: " + mpnData.contact.onlineComments);
    $contact.append($formText);
}
if (mpnData.contact.email) {
    var $formText = $('<p>').text("Email Address: " + mpnData.contact.email);
    $contact.append($formText);
}
if (mpnData.contact.phone) {
    var $formText = $('<p>').text("Phone Number: " + mpnData.contact.phone);
    $contact.append($formText);
}
if (mpnData.contact.address) {
    var $formText = $('<p>').text("Address: " + mpnData.contact.address);
    $contact.append($formText);
}
// Compile all summary sections
$summary.append($hipaa).append($use).append($yourId).append($yourNonId).append($store).append($encryption).append($privacy).append($user).append($deactivation).append($policy).append($breach).append($contact);
// $summary.css({'background': 'beige', 'width': '400px', 'font-size': '13px'});
// $('.animatedPreview h3').css({'font-weight': 'bold'});
// $('.animatedPreview div').css({'margin': '10px'});
 }

createDisplay();
