
with open("numbers.txt") as file:
    file_contents_as_list = file.readlines();

    # print file_contents_as_list
new_list = [];
for line in file_contents_as_list:
    split_line = line.split()
    for char in split_line:
        if int(char):
            new_list.append(char);
doubley_new_list = [];
for line2 in new_list:
    for digit in line2:
        doubley_new_list.append(int(digit))

print sum(doubley_new_list);
