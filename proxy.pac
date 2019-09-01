function FindProxyForURL(url, host)
{
	if (host == 'music.yandex.ru' || host == '2ip.ru')
		return "SOCKS localhost:9050";
	return "DIRECT";
}
