describe('TicTacToe game page', function() {
    it('should play a successfull game for X', function() {
        browser.ignoreSynchronization = true
        browser.get('/');

        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[2]/button[1]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[3]/button[2]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[4]/button[3]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[2]/button[3]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[4]/button[1]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[2]/button[2]')).click();
        element(by.xpath('//*[@id="container"]/div/div[1]/div/div[4]/button[2]')).click();
        
        var TheWinnerIs = element(by.css('.status'));
        expect(TheWinnerIs.getText()).toEqual('The winner is : X');
    });
});

