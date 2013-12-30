# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }

$("//div[@id='footer']") {
    name("footer")
    $(".//div[@id='ftwrapper']") {
        remove(".//@style")
    }
    $("div") {
        #Fix privacy policy
        insert("div", class: "ftgroup")
    }

    #Separate out Policies from Company
    $(".//div[@class='ftgroup'][1]") {
        $("div[not(@class = 'ftlinks')][2]") {
            wrap("div", class: "ftgroup") {
                move_here("../div[@class='ftlinks'][position()>last()-3]")
                move_to("../../.")
            }
        }
    }
    #Create View Desktop Site link

    $(".//div[@class='ftgroup']") {
        attributes(data-ur-set: "toggler", class: "_footer-group")
        $("div[not(@class = 'ftlinks')]") {
            attributes(data-ur-toggler-component: "button", class: "_footer-group-button")
            %text = text()
            insert("i", class: "fa fa-chevron-right")
            $("../."){
                attribute("data-mw-footer-item", %text)
            }
        }

        insert("div", class:"_footer-group-content", data-ur-toggler-component: "content")
        {
            move_here("../div[@class='ftlinks']", class: "_footer-group-link") {
                $("a") {
                    insert("i", class: "fa fa-chevron-right")
                }
            }
        }
    }
    $(".//div[@id='ftwrapper']") {
        insert_top("a", "VIEW DESKTOP SITE") {
            attributes(data-mw-footer-item: "VIEW DESKTOP SITE", href:"#", class: "_footer-group-button")
            insert("i", class: "fa fa-chevron-right")
        }
        move_here("div/div[@data-mw-footer-item='POLICIES']","top")
        move_here("div/div[@data-mw-footer-item='ORDERING']","top")
        move_here("div/div[@data-mw-footer-item='COMPANY']","top")
        move_here("div/div[@data-mw-footer-item='CUSTOMER SERVICE']","top")

        %footer = this()
        $(".//form[@id='emailSignUpForm']") {
            $("fieldset/a") {
                attributes(data-mw-usage: "email-button")
                move(this(), %footer, position("bottom"))
            }
            remove()
        }

        move_here("//div[@class='txtCopyright']")

        insert("div", class: "_footer-social-bar") {
            move_here("//a[@class='social-icons-fb']")
            move_here("//a[@class='social-icons-twitter']")
            move_here("//a[@class='social-icons-youtube']")
            move_here("//a[@class='social-icons-pinterest']")
            move_here("//a[@class='social-icons-instagram']")
        }
    }
    remove(".//div[@id='ftcontent'] | .//div[@class='ftextra']")
}
$("//div[@class='copytxt-inner']") {
    remove(".//@style")
}