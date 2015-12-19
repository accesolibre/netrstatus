netrstatus
==========

Short for Internet Report Status, does some tests to check the internet
connection and reports these results to `accesolibre.red` API.

What tests are ran?
-------------------

+ **HTTP/HTTPS resolution**: it tests if a web page loads or not with a 200 
  status or any other configure status being expected for that address.
+ **Traceroute**: tests if there's any split or delay on the packages being
  delivered. This is useful as well to compare routes from the same IP address
  in future tests being ran.
+ **DNS resolution**: uses the assigned DNS to check if the domain name can be
  resolved. It checks as well if this resolution conforms to the expected
  resolution for that domain name.
+ **ICMP**: test if ICMP is blocked (if the host accepts it).
+ **Network speed**: test the network connection speed.

Author and license
------------------

© 2015, Jose-Luis Rivas `<me@ghostbar.co>`.

Licensed under the ISC terms. Find a copy in the file `LICENSE`.

[//]: # vim: ft=markdown tw=80
