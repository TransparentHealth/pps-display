
function createDisplay() {
      // The selector for the container where the summary will be viewed. Ex) #idName, .className
      var containerSelector = '.policyDisplay';
      var $summary = $(containerSelector).html('');
      // Summary Title
      var $header = $('<header id="infoDisplay"></header>');
      var $keyList = $('<div id="key-list"><ul><li class="key-item first"><p>Risk level:</p></li><li class="key-item"><p id="green">&nbspLow</p></li><li class="key-item"><p id="yellow">&nbspMedium</p></li><li class="key-item"><p id="red">&nbspHigh</p></li></ul>' );
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
          $statementContainer = '<div class="mpn-risk"><p>Risk:</p><div class="alert red">High</div></div><div class="answer"><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass +'>+</p></div></div>';
        } else if (id === 'yellow') {
          $statementContainer = '<div class="mpn-risk"><p>Risk:</p><div class="alert yellow">Medium</div></div><div class="answer"><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass + '>+</p></div></div>';
        } else {
          $statementContainer = '<div class="mpn-risk"><p>Risk:</p><div class="alert green">Low</div></div><div class="answer"><h4>' + text + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + arrowClass + '>+</p></div></div>';
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
      $useInfo.append('<div class="answer"><h4>We collect and use your identifiable data:</h4></div>');
      var $useList = $('<ul class="mpn-info-list">');
      $useInfo.append($useList);
      if (mpnData.use.primaryService) {
          $useList.append('<li><div class="mpn-point"></div><p>To provide the primary service of this product</p></li>');
      }
      if (mpnData.use.marketing) {
          $useList.append('<li><div class="mpn-point"></div><p>To develop marketing materials for our products</p></li>');
      }
      if (mpnData.use.scientificResearch) {
          $useList.append('<li><div class="mpn-point"></div><p>To conduct scientific research</p></li>');
      }
      if (mpnData.use.companyOps) {
          $useList.append('<li><div class="mpn-point"></div><p>For company operations (e.g., quality control or fraud detection)</p></li>');
      }
      if (mpnData.use.development) {
          $useList.append('<li><div class="mpn-point"></div><p>To develop and improve new and current products and services (e.g., analytics)</p></li>');
      }
      if (mpnData.use.other) {
          $useList.append('<li><div class="mpn-point"></div><p>' + mpnData.use.otherDescription + '</p></li>');
      }
      $useInfo.append("</ul>");

      // Identifiable data share/sell
      var $yourId = $('<div class="mpn-id-container"></div>');
      var $yourIdShare = $('<div class="id-share"></div>');
      var $yourIdSell = $('<div class="id-sell"></div>');
      var $idShareInfo = $('<div class="share-info idShareHide"></div>');
      var $idSellInfo = $('<div class="sell-info idSellHide"></div>');
      var $idShareList = $('<ul class="mpn-info-list">');
      $yourId.append("<h3>Your Identifiable Data:</h3>");
      $yourId.append($yourIdShare);
      $yourId.append($yourIdSell);
      if (mpnData.share.noneWithId == true) {
          $yourIdShare.append(setContainer('green', 'We do not share your indentifiable data.', 'idShare-arrow'));
          $yourIdShare.append($idShareInfo);
          $idShareInfo.append('<p>We DO NOT share your identifiable data</p>');
      } else {
          $yourIdShare.append(setContainer('red', 'We share your indentifiable data.', 'idShare-arrow'));
          $yourIdShare.append($idShareInfo);
          $idShareInfo.append("<h5>We share your data:</h5>");
          $idShareInfo.append($idShareList);
          if (mpnData.share.primaryServiceWithId) {
              $idShareList.append('<li><div class="mpn-point"></div><p>To provide the primary service of the product</p></li>');
          }
          if (mpnData.share.scientificResearchWithId) {
              $idShareList.append('<li><div class="mpn-point"></div><p>To conduct scientific research</p></li>');
          }
          if (mpnData.share.companyOpsWithId) {
              $idShareList.append('<li><div class="mpn-point"></div><p>For company operations (e.g., quality control or fraud detection)</p></li>');
          }
          if (mpnData.share.developmentWithId) {
              $idShareList.append('<li><div class="mpn-point"></div><p>To develop and improve new and current products and services (e.g., analytics)</p></li>');
          }
          if (mpnData.share.otherWithId) {
              $idShareList.append('<li><div class="mpn-point"></div><p>' + mpnData.share.otherDescriptionWithId + '</p></li>');
          }
      }
      $idShareList.append('</ul>');
      if (mpnData.sell.dataWithId === "Yes") {
        $yourIdSell.append(setContainer('red', 'We sell your identifiable data.', 'idSell-arrow'));
          $yourIdSell.append($idSellInfo);
          $idSellInfo.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
      } else if (mpnData.sell.dataWithId === "Yes. With your permission,") {
          $yourIdSell.append(setContainer('yellow', 'With your permission, we sell your identifiable data.', 'idSell-arrow'));
          $yourIdSell.append($idSellInfo);
          $idSellInfo.append("<p>With your permission, we sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
      } else {
          $yourIdSell.append(setContainer('green', 'We do not sell your identifiable data.', 'idSell-arrow'));
          $yourIdSell.append($idSellInfo);
          $idSellInfo.append("<p>We do not sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>");
      }

      // Non Id share/sell
      var $yourNonId = $('<div class="mpn-nonId-container"></div>');
      var $yourNonIdShare = $('<div class="nonId-share"></div>');
      var $yourNonIdSell = $('<div class="nonId-sell"></div>');
      var $nonIdShareInfo = $('<div class="share-info nonShareHide"></div>');
      var $nonIdShareList = $('<ul class="mpn-info-list">');
      var $nonIdSellInfo = $('<div class="sell-info nonSellHide"></div>');
      $yourNonId.append("<h3>Your Non-Identifiable Data:</h3>");
      $yourNonId.append($yourNonIdShare);
      $yourNonId.append($yourNonIdSell);
      if (mpnData.share.noneNoId === true) {
          $yourNonIdShare.append(setContainer('green', 'We do not share your non-identifiable data.', 'nonIdShare-arrow'));
          $yourNonIdShare.append($nonIdShareInfo);
          $nonIdShareInfo.append('<p>We DO NOT share your data after removing identifiers</p>');
      } else {
          $yourNonIdShare.append(setContainer('yellow', 'We share your non-identifiable data.', 'nonIdShare-arrow'));
          $yourNonIdShare.append($nonIdShareInfo);
          $nonIdShareInfo.append("<h5>We share your data AFTER removing identifiers:</h5>");
          $nonIdShareInfo.append($nonIdShareList);
          if (mpnData.share.primaryServiceNoId) {
              $nonIdShareList.append('<li><div class="mpn-point"></div><p>To provide the primary service of the product</p></li>');
          }
          if (mpnData.share.scientificResearchNoId) {
              $nonIdShareList.append('<li><div class="mpn-point"></div><p>To conduct scientific research</p></li>');
          }
          if (mpnData.share.companyOpsNoId) {
              $nonIdShareList.append('<li><div class="mpn-point"></div><p>For company operations (e.g., quality control or fraud detection)</p></li>');
          }
          if (mpnData.share.developmentNoId) {
              $nonIdShareList.append('<li><div class="mpn-point"></div><p>To develop and improve new and current products and services (e.g., analytics)</p></li>');
          }
          if (mpnData.share.otherNoId) {
              $nonIdShareList.append('<li><div class="mpn-point"></div><p>' + mpnData.share.otherDescriptionNoId + '</p></li>');
          }
      }
      $nonIdShareList.append('</ul>');
      if (mpnData.sell.dataNoId === "Yes") {
          $yourNonIdSell.append(setContainer('yellow', 'We sell your non-identifiable data', 'nonIdSell-arrow'));
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
          $encryptionLocal.append('<div class="alert blue">Attention</div><div class="answer"><h4>Will we encrypt your data within your device? Answer is N/A</h4></div>');
      }
      $encryption.append($encryptionServer);
      if (mpnData.encryption.server === yesDefault) {
          $encryptionServer.append(setContainer('green', 'By default, we encrypt your data when stored on our company servers or on the cloud.'));
      } else if (mpnData.encryption.server === yesSteps) {
          $encryptionServer.append(setContainer('yellow', 'When you take certain steps, we encrypt your data when stored on our company servers or on the cloud.'));
      } else if (mpnData.encryption.server === "No") {
          $encryptionServer.append(setContainer('red', 'We do not encrypt your data when stored on our company servers or on the cloud.'));
      } else {
          $encryptionServer.append('<div class="alert blue">Attention</div><div class="answer"><h4>Will we encrypt your data when stored on our company servers or on the cloud? Answer is N/A</h4></div>');
      }
      $encryption.append($encryptionTransmit);
      if (mpnData.encryption.transmit === yesDefault) {
          $encryptionTransmit.append(setContainer('green', 'By default, we encrypt your data while it is transmitted.'));
      } else if (mpnData.encryption.transmit === yesSteps) {
          $encryptionTransmit.append(setContainer('yellow', 'When you take certain steps, we encrypt your data while it is transmitted.'));
      } else if (mpnData.encryption.transmit === "No") {
          $encryptionTransmit.append(setContainer('red', 'We do not encrypt your data while it is transmitted.'));
      } else {
          $encryptionTransmit.append('<div class="alert blue">Attention</div><div class="answer"><h4>Will we encrypt your data while it is transmitted? Answer is N/A</h4></div>');
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
      var $userOptionsList = $('<ul class="mpn-info-list">');
      $user.append("<h3>User Options:</h3>");
      $user.append($userQuestion);
      $userQuestion.append('<div class="answer"><h4>What you can do with your data:</h4></div>');
      $userQuestion.append($userOptions);
      $userOptions.append($userOptionsList);
      $userOptionsList.append('<ul>');
      if (mpnData.user.hasOptions === 'Yes') {
          if (mpnData.user.access) {
              $userOptionsList.append('<li><div class="mpn-point"></div><p>Access the data</p></li>');
          }
          if (mpnData.user.edit) {
              $userOptionsList.append('<li><div class="mpn-point"></div><p>Edit the data</p></li>');
          }
          if (mpnData.user.share) {
              $userOptionsList.append('<li><div class="mpn-point"></div><p>Share the data</p></li>');
          }
          if (mpnData.user.delete) {
              $userOptionsList.append('<li><div class="mpn-point"></div><p>Delete the data</p></li>');
          }
      } else if (mpnData.user.hasOptions === 'No') {
          $userOptionsList.append('<li><div class="mpn-point"></div><p>You can not access the data</p></li>');
      }
      $userOptionsList.append('</ul>');

      // Privacy Info
      var $privacy = $('<div class="mpn-privacy-container"></div>');
      var $privacyAccess = $('<div class="privacy-access"></div>');
      var $privacyAccessNoArrow = $('<div class="privacy-access-no"></div>');
      var $privacyAccessInfo = $('<div class="privacy-access-info  privacyHide"></div>');
      var $privacyAccessList = $('<ul class="mpn-info-list">');
      var $privacySocial = $('<div class="privacy-social"></div>');
      $privacy.append("<h3>Privacy:</h3>");
      $privacy.append($privacyAccess);
      if (mpnData.privacy.requestPermissions === 'Yes') {
          $privacyAccess.append(setContainer('yellow', 'We will request access to device data or applications.', 'privacy-arrow'));
          $privacyAccess.append($privacyAccessInfo);
          $privacyAccessInfo.append('<h5>We will request access to:</h5>');
          $privacyAccessInfo.append($privacyAccessList);
          if (mpnData.privacy.camera) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Camera</p></li>');
          }
          if (mpnData.privacy.photos) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Photos</p></li>');
          }
          if (mpnData.privacy.contact) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Contacts</p></li>');
          }
          if (mpnData.privacy.location) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Location Services</p></li>');
          }
          if (mpnData.privacy.microphone) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Microphone</p></li>');
          }
          if (mpnData.privacy.health) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>Health monitoring devices</p></li>');
          }
          if (mpnData.privacy.other) {
              $privacyAccessList.append('<li><div class="mpn-point"></div><p>' + mpnData.privacy.otherDescription + '</p></li>');
          }
          $privacyAccessList.append('</ul>');
      }
       else if (mpnData.privacy.requestPermissions === 'No') {
        $privacyAccess.detach();
          $privacy.append($privacyAccessNoArrow);
           $privacyAccess.append(setContainer('green', 'We will not request access to device data or applications.'));
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
      $policyQuestion.append('<div class="answer"><h4>How we will notify you if our privacy policy changes:</h4></div>');
      if (mpnData.policy.notificationMethod) {
          var $formText = $('<p>').text(mpnData.policy.notificationMethod);
          $policyQuestion.append($policyInfo);
          $policyInfo.append('<div class="mpn-point"></div>');
          $policyInfo.append($formText);
      }
      // Breach Info
      var $breach = $('<div class="mpn-breach-container"></div>');
      var $breachQuestion = $('<div class="breach-question"></div>');
      var $breachInfo = $('<div class="breach-info"></div>');
      $breach.append("<h3> Data Breach:</h3>");
      $breach.append($breachQuestion);
      $breachQuestion.append('<div class="answer"><h4>How we will notify you and protect your data in case of an improper disclosure:</h4></div>');
      if (mpnData.breach.procedure) {
          var $formText = mpnData.breach.procedure;
          $breachQuestion.append($breachInfo);
          $breachInfo.append('<div class="mpn-point"></div>');
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
      $summary.append($header).append($use).append($yourId).append($yourNonId).append($hipaa).append($encryption).append($store).append($user).append($privacy).append($deactivation).append($policy).append($breach).append($contact);


  // Event listeners
  //add class animates header items. if statements are media queryies.
  $( document ).ready(function() {
      $('.key-item').addClass('active');
      });


    //resize screen updates
      $(window).resize( function () {
      var width = parseInt($(".policyDisplay").css("width"));
      if (width <= 850) {
        $('.policyDisplay .mpn-deactivation-container .deactivation-info').css("font-size", "1em");
      }
      if (width <= 780){
        $('.policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-contact-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-data-storage-container').css("width", "97%");
        $('.policyDisplay html').css("cursor", "pointer");
        $('.policyDisplay #mpn-contact-anchor').css({"font-size": "1em", "padding": "4px 8px"});
        $('.policyDisplay .statement-styles, .policyDisplay .mpn-hipaa-container .hipaa-info, .policyDisplay .mpn-hipaa-container .use-info, .policyDisplay .mpn-use-container .hipaa-info, .policyDisplay .mpn-use-container .use-info, .policyDisplay .mpn-id-container .id-share, .policyDisplay .mpn-id-container .id-sell, .policyDisplay .mpn-id-container .nonId-share, .policyDisplay .mpn-id-container .nonId-sell, .policyDisplay .mpn-nonId-container .id-share, .policyDisplay .mpn-nonId-container .id-sell, .policyDisplay .mpn-nonId-container .nonId-share, .policyDisplay .mpn-nonId-container .nonId-sell').css("width", "90%");
        $('.policyDisplay .mpn-data-storage-container .local-storage, .policyDisplay .mpn-data-storage-container .third-storage, .policyDisplay .mpn-encryption-container .encrypt-local, .policyDisplay .mpn-encryption-container .encrypt-third, .policyDisplay .mpn-encryption-container .encrypt-trans, .policyDisplay .mpn-user-access-container #user-qid, .policyDisplay .mpn-privacy-container .privacy-access, .policyDisplay .mpn-privacy-container .privacy-social, .policyDisplay .mpn-deactivation-container .deactivation-info, .policyDisplay .mpn-policy-container .policy-question, .policyDisplay .mpn-breach-container .breach-question').css("width", "90%");
        $('.policyDisplay h4').css("width", "85%");
        $('#key-list ul').css({"display": "flex", "flex-wrap": "wrap", "justify-content": "center"});
        $('.policyDisplay .mpn-info-list').css("padding", "10px 0 0 3px");
        console.log("hey");
      }
      if (width <= 550) {
        $('.policyDisplay .policy-info, .policyDisplay .breach-info').css("margin-top", "20px");
        $('.policyDisplay .mpn-container-styles, .policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-data-storage-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-contact-container').css("margin-bottom", "6px");
      }
      if (width <= 420) {
        $('.policyDisplay .answer h4').css({"font-size": "1em", "width": "83%"});
        $('.policyDisplay .info-styles, .policyDisplay .mpn-id-container .share-info, .policyDisplay .mpn-id-container .sell-info, .policyDisplay .mpn-nonId-container .share-info, .policyDisplay .mpn-nonId-container .sell-info, .policyDisplay .mpn-user-access-container .user-options, .policyDisplay .mpn-privacy-container .privacy-access-info, .policyDisplay .mpn-policy-container .policy-question .policy-info, .policyDisplay .mpn-breach-container .breach-question .breach-info').css({"width": "95%", "margin": "0 0 0 16px"});
      }
      if (width <= 380) {
      $('.policyDisplay #infoDisplay .key-item').css({"padding": " 0 3px", "font-size": "16px"});
      }
    });

    //starting screen width check
      var startingWidth = parseInt($(".policyDisplay").css("width"));
    if (startingWidth <= 850) {
      $('.policyDisplay .mpn-deactivation-container .deactivation-info').css("font-size", "1em");
    }
    if (startingWidth <= 780){
      $('.policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-contact-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-data-storage-container').css("width", "97%");
      $('.policyDisplay html').css("cursor", "pointer");
      $('.policyDisplay #mpn-contact-anchor').css({"font-size": "1em", "padding": "4px 8px"});
      $('.policyDisplay .statement-styles, .policyDisplay .mpn-hipaa-container .hipaa-info, .policyDisplay .mpn-hipaa-container .use-info, .policyDisplay .mpn-use-container .hipaa-info, .policyDisplay .mpn-use-container .use-info, .policyDisplay .mpn-id-container .id-share, .policyDisplay .mpn-id-container .id-sell, .policyDisplay .mpn-id-container .nonId-share, .policyDisplay .mpn-id-container .nonId-sell, .policyDisplay .mpn-nonId-container .id-share, .policyDisplay .mpn-nonId-container .id-sell, .policyDisplay .mpn-nonId-container .nonId-share, .policyDisplay .mpn-nonId-container .nonId-sell').css("width", "90%");
      $('.policyDisplay .mpn-data-storage-container .local-storage, .policyDisplay .mpn-data-storage-container .third-storage, .policyDisplay .mpn-encryption-container .encrypt-local, .policyDisplay .mpn-encryption-container .encrypt-third, .policyDisplay .mpn-encryption-container .encrypt-trans, .policyDisplay .mpn-user-access-container #user-qid, .policyDisplay .mpn-privacy-container .privacy-access, .policyDisplay .mpn-privacy-container .privacy-social, .policyDisplay .mpn-deactivation-container .deactivation-info, .policyDisplay .mpn-policy-container .policy-question, .policyDisplay .mpn-breach-container .breach-question').css("width", "90%");
      $('.policyDisplay h4').css("width", "85%");
      $('#key-list ul').css({"display": "flex", "flex-wrap": "wrap", "justify-content": "center"});
      $('.policyDisplay .mpn-info-list').css("padding", "10px 0 0 3px");

    }
    if (startingWidth <= 550) {
      $('.policyDisplay .policy-info, .policyDisplay .breach-info').css("margin-top", "20px");
      $('.policyDisplay .mpn-container-styles, .policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-data-storage-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-contact-container').css("margin-bottom", "6px");
    }
    if (startingWidth <= 420) {
      $('.policyDisplay .answer h4').css({"font-size": "1em", "width": "83%"});
      $('.policyDisplay .info-styles, .policyDisplay .mpn-id-container .share-info, .policyDisplay .mpn-id-container .sell-info, .policyDisplay .mpn-nonId-container .share-info, .policyDisplay .mpn-nonId-container .sell-info, .policyDisplay .mpn-user-access-container .user-options, .policyDisplay .mpn-privacy-container .privacy-access-info, .policyDisplay .mpn-policy-container .policy-question .policy-info, .policyDisplay .mpn-breach-container .breach-question .breach-info').css({"width": "95%", "margin": "0 0 0 16px"});
    }
    if (startingWidth <= 380) {
    $('.policyDisplay #infoDisplay .key-item').css({"padding": " 0 3px", "font-size": "16px"});

    }

  var parent = $('.policyDisplay').parent();

  $(parent).scroll(function() {
     var height = $(parent).scrollTop();
     var width = $(window).width()
     //check scroll for header animation
      if (height  < 40 ) {
       $('.key-item').addClass('active');
     }

     if (height  > 100 ) {
       $('.key-item').removeClass('active');
     }
 });
    // checks if "info" section has display: none. toggles betweeen hide/show
  function toggleHide(target, button) {
      textArrow(button);
      if ($(target).is(":hidden")) {
          $(target).slideDown();
      } else {
          $(target).slideUp();
      }
      //return false;

  };

  $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
    // More/Less button active class toggle
  function textArrow(targetArrow) {
      $(targetArrow).toggleText('+', '-')
  };

     // More/Less button listeners
  $('.policyDisplay').on("click", ".id-share", function() {
      toggleHide(".idShareHide", ".idShare-arrow");
  });
  $('.policyDisplay').on("click", ".id-sell", function() {
      toggleHide(".idSellHide", ".idSell-arrow");
  });
  $('.policyDisplay').on("click", ".nonId-sell", function() {
      toggleHide(".nonSellHide", ".nonIdSell-arrow");
  });
  $('.policyDisplay').on("click", ".nonId-share", function() {
      toggleHide(".nonShareHide", ".nonIdShare-arrow");
  });
  $('.policyDisplay').on("click", ".privacy-access", function() {
      toggleHide(".privacyHide", ".privacy-arrow");
  });
  }

  createDisplay();
