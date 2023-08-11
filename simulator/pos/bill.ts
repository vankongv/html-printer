export const billingReceiptTemplate = `
<?xml version= "1.0" encoding= "UTF-8"?>
<document>
  <align mode= "center">{{#organization}}
    <bold>
      <text-line size= "0:1">{{organization}}</text-line>
    </bold>{{/organization}}
    <align mode= "center">
      <align mode= "center">{{#storeName}}
        <bold>
          <text-line size= "0:0">{{storeName}}</text-line>
        </bold>{{/storeName}}
        <line-feed />
        {{#storeNo}}<text-line>{{businessIdentifier}}:{{storeNo}}</text-line>{{/storeNo}}
        <line-feed />
        {{#storeAddress}}<text-line>{{storeAddress}}</text-line>{{/storeAddress}}
        {{#storePhone}}
        <text-line>{{storePhone}}</text-line>{{/storePhone}}
      </align>
      <under-line mode= "two-point"></under-line>
      {{#orderName}}
        <align mode= "center">
          <text-line size= "0:0">{{{divider}}}</text-line>
          <text-line size= "1:1">{{orderName}}</text-line>
        </align>
      {{/orderName}}
      <align mode= "center">
        <text-line size= "0:0">{{{divider}}}</text-line>
      </align>
      <line-feed />
      <align mode= "center">
        <text-line size= "0:0">{{orderDetails}}</text-line>
      </align>
      <align mode= "center">
        <text-line size= "0:0">{{{divider}}}</text-line>
      </align>
      <line-feed />
      <align mode= "center">
        <bold>
          <text-line size= "0:0">{{orderItemsHeaders}}</text-line>
        </align>
        <line-feed />
        <align mode= "center">
          <text-line size= "0:0">{{orderItems}}</text-line>
        </align>
        <line-feed />
        <align mode= "center">
          <bold>
            <text-line size= "0:1">{{orderTotalDue}}</text-line>
          </bold>

        </align>
        {{#showPaymentDivider}}
        <align mode= "center">
          <text-line size= "0:0">{{{divider}}}</text-line>
        </align>
        <line-feed />{{/showPaymentDivider}}{{#paymentDetails}}
        <align mode= "center">
          <text-line>{{paymentDetails}}</text-line>
        </align>{{/paymentDetails}}{{#currentNthPayment}}
        <align mode= "center">
          <bold>
            <text-line>{{currentNthPayment}}</text-line>
          </bold>
        </align>{{/currentNthPayment}}
        {{#totalOutstanding}}
        <line-feed />
        <align mode= "center">
          <bold>
            <text-line>{{totalOutstanding}}</text-line>
          </bold>
        </align>
        {{/totalOutstanding}}
        {{#isPrintingPaymentReceipt}}
        <align mode= "center">
          <text-line size="0:0">{{paymentReceiptDetails}}</text-line>
          <bold>
            <text-line size="0:0">{{adyenTotal}}</text-line>
          </bold>
        </align>
        {{/isPrintingPaymentReceipt}}
        <align mode= "center">
          {{#isPrintingQR}}
          {{#qrCode}}
          <text-line size= "0:0">{{{divider}}}</text-line>
            <line-feed/>
            <bold><text-line size= "0:0">{{qrText}}</text-line></bold>
          <qrcode model="2" size="5" ecl= "L">{{qrCode}}</qrcode>
          {{/qrCode}}
          {{/isPrintingQR}}
        </align>
        {{#customerName}}
        <align mode= "center">
          <text-line size= "0:0">{{{divider}}}</text-line>
        </align>
        <line-feed />
        <align mode= "center">
          <small>
            <text-line>Customer</text-line>
          </small>
          <text-line size= "0:1"> {{customerName}}</text-line>{{#customerPhone}}
          <text-line size= "0:0">{{customerPhone}}</text-line>{{/customerPhone}}{{#customerAddress}}
          <text-line size= "0:0">{{customerAddress}}</text-line>{{/customerAddress}}
        </align>{{/customerName}}
        <align mode= "center">
          <text-line size= "0:0">{{{divider}}}</text-line>
        </align>
      </align>
      <line-feed />
      {{#loyaltySnapshot}}
      <align mode="center">
        {{#loyalty}}
        <bold>
          <text-line size="0:0">{{loyaltyHeader}}</text-line>
        </bold>
        <text-line>{{loyalty}}</text-line>
        <line-feed />
        {{/loyalty}}
        {{#redeemedRewards}}
        <bold>
          <text-line size="0:0">{{redeemedRewardsHeader}}</text-line>
        </bold>
        <text-line>{{redeemedRewards}}</text-line>
        <line-feed />
        {{/redeemedRewards}}
        {{#availableRewards}}
        <bold>
          <text-line size="0:0">{{availableRewardsHeader}}</text-line>
        </bold>
        <text-line>{{availableRewards}}</text-line>
        <line-feed />
        {{/availableRewards}}
        <align mode= "center">
          <text-line size= "0:0">{{{divider}}}</text-line>
        </align>
        <line-feed />
      </align>
      {{/loyaltySnapshot}}
      <align mode= "center">
        <line-feed />
        <bold>
          <text-line size="1:0">Tax Invoice/Receipt</text-line>
        </bold>
      </align>
      <paper-cut />
    </document>`;